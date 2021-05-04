const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get(["/"], async (req, res) => {
  res.json({ empty: 'result'});
});

app.get(["/prisma"], async (req, res) => {
  const { PrismaClient } = require("@prisma/client");
  const prisma = new PrismaClient();
  const allUsers = await prisma.user.findMany();
  prisma.$disconnect()
  res.json(allUsers);
});

app.listen({ address: "0.0.0.0", port: port }, () => console.log(`HelloNode app listening on port ${port}!`));