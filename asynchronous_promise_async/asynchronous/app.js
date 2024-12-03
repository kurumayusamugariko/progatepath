import express from "express";

const app = express();

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Emma",
  },
  {
    id: 3,
    name: "Michael",
  },
  {
    id: 4,
    name: "Sophia",
  },
  {
    id: 5,
    name: "William",
  },
];

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json({id: user.id, name: user.name});
  } else {
    res.status(404).json({error: "User not found"});
  }
});

export default app;
