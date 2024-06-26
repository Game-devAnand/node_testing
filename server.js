const express = require("express");
const path = require("path");
const app = express();

app.listen(3000);

app.use(express.json());

const students = [
  { id: 1, name: "Anand" },
  { id: 2, name: "Joyal" },
  { id: 3, name: "Ben" },
  { id: 4, name: "Anna" },
  { id: 5, name: "pavan" },
];

app.get("/api/math/add", (req, res) => {
  res.send("ADDED");
});

app.get("/", (req, res) => {
  res.send("HI");
});

app.get("/fun", (req, res) => {
  fun();
  res.send("fun");
});

app.get("/web", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, "public/data.json"));
});

app.get("/list", (req, res) => {
  res.sendFile(path.join(__dirname, "public/list.html"));
});


app.get("/api/students", (req, res) => {
  res.send(students);
});

app.get("/api/students/:id", (req, res) => {
  const rel = students.find((c) => c.id === parseInt(req.params.id));
  if (!rel) res.status(404).send("not fount");
  res.send(rel);
});

app.post("/api/students", (req, res) => {
  const std = {
    id: students.length + 1,
    name: req.body.name,
  };
  students.push(std);
  res.send(std);
});

app.post("/api/students", (req, res) => {
  const std = {
    id: students.length + 1,
    name: req.body.name,
  };
  students.push(std);
  res.send(std);
});

app.put("/api/students/:id", (req, res) => {
  const std = students.find((c) => c.id === parseInt(req.params.id));
  std.name = req.body.name;
  res.send(std);
});

app.delete("/api/students/:id", (req, res) => {
  const std = students.find((c) => c.id === parseInt(req.params.id));
  if (!std) {
    res.sendStatus(404).send("Not found data");
    return;
  }
  const index = students.indexOf(std);
  students.splice(index, 1);
  res.send(students);
});
