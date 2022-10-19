import express from "express";
import mysql from "mysql";


const app = express();
app.listen(9000, () => {
    console.log('berhasil konek ke server brodi')
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "firstdatabase",
});

app.get("/", (req, res) => {
  res.json("hello braderssss");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// testing showData "/books"
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    })
})







