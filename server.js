const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get(["/"], async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));