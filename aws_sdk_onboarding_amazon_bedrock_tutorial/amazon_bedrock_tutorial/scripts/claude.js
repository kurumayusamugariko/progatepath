import {
  //モデルの呼び出しに必要なパッケージをインポート
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import fs from "fs";
import "dotenv/config";

// Create a new BedrockRuntimeClient
const client = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Set the parameters for the model invocation
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
            text: "こんにちは",
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "こんにちは!今日はどのようなお手伝いができるでしょうか?どんなことでも質問してくださいね。",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Amazon Bedrockについて詳しく教えてくれますか？",
          },
        ],
      },
    ],
  }),
};

const invokeModel = async () => {
  try {
    // Invoke the model
    const command = new InvokeModelCommand(params);
    const response = await client.send(command);

    // Parse the response and extract the text
    const textDecoder = new TextDecoder("utf-8");
    // Decode the response body
    const responseBodyText = textDecoder.decode(response.body);

    // Write the response text to a file
    fs.writeFileSync("output/text.json", responseBodyText, "utf-8");
    // Parse the response body text
    const responseBody = JSON.parse(responseBodyText);
    const responseText = responseBody.content[0].text;
    console.log("Response Text:", responseText);
  } catch (error) {
    console.error("Error invoking model:", error);
  }
};

invokeModel();
