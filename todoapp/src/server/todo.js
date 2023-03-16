const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todoapp",
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + db.threadId);
});

app.post("/activities", (req, res) => {
  const {activity}   = req.body;
  console.log(activity);

  const sql = `INSERT INTO activities (Activity) VALUE (?)`;
  db.query(
    sql,
    [activity],
    (err, result) => {
      if (err) {
        console.error("Error inserting activity into database: " + err.stack);
        res.status(500).send("Error inserting activity into database");
        return;
      }
      console.log("activity inserted into database with id " + result.insertId);
      res.send(result);
    }
  );
});

app.get("/getActivities", (req, res) => {
  const sql = `SELECT * FROM activities`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error selecting activities from database: " + err.stack);
      res.status(500).send("Error selecting activities from database");
      return;
    }
    console.log("Activity selected from database succesfully ");
    res.send(JSON.stringify(result));
    console.log(results);
    //result.setHeader("Content-Type", "application/json");
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});