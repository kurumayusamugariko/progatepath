import {
  BedrockRuntimeClient,
  InvokeModelWithResponseStreamCommand,
} from "@aws-sdk/client-bedrock-runtime";
import fs from "fs";
import "dotenv/config";

const client = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const params = {
  modelId: "anthropic.claude-3-haiku-20240307-v1:0",
  contentType: "application/json",
  accept: "application/json",
  body: JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "こんにちは、",
          },
        ],
      },
    ],
  }),
};

const invokeModel = async () => {
  try {
    // Invoke the model
    const command = new InvokeModelWithResponseStreamCommand(params);
    const response = await client.send(command);

    // Create a write stream for the output file
    const outputStream = fs.createWriteStream(
      "output/text_stream.json",
      "utf-8",
    );

    // Process the response stream
    const responseStream = response.body[Symbol.asyncIterator]();
    let accumulatedText = "";

    // Create an async iterator to read from the response stream
    for await (const chunk of responseStream) {
      if (chunk.chunk) {
        // Convert Uint8Array to Buffer
        const buffer = Buffer.from(chunk.chunk.bytes);
        // Decode buffer to text
        const text = buffer.toString("utf-8");

        // Parse each chunk as JSON and handle the content
        const parsedChunk = JSON.parse(text);
        if (
          parsedChunk.type === "content_block_delta" &&
          parsedChunk.delta &&
          parsedChunk.delta.text
        ) {
          // Accumulate text and print it as it is received
          accumulatedText += parsedChunk.delta.text;
          process.stdout.write(parsedChunk.delta.text); // Print text to console in real-time
        }

        outputStream.write(text);
      } else if (chunk.internalServerException) {
        console.error(
          "Internal Server Error:",
          chunk.internalServerException.message,
        );
      } else if (chunk.modelStreamErrorException) {
        console.error(
          "Model Stream Error:",
          chunk.modelStreamErrorException.message,
        );
      } else if (chunk.validationException) {
        console.error("Validation Error:", chunk.validationException.message);
      } else if (chunk.throttlingException) {
        console.error("Throttling Error:", chunk.throttlingException.message);
      } else if (chunk.modelTimeoutException) {
        console.error(
          "Model Timeout Error:",
          chunk.modelTimeoutException.message,
        );
      }
    }

    console.log("\nResponse stream ended");
    outputStream.end();

    console.log("\nAccumulated Text:", accumulatedText);
  } catch (error) {
    console.error("Error invoking model:", error);
  }
};

invokeModel();
