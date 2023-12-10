const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Router to get movie details
router.get("/:id", (req, res) => {
  const idToGet = req.params.id;
  console.log(idToGet);

  const queryText = `
    SELECT * FROM movies
      WHERE movies.id = $1;`;

  pool
    .query(queryText, [idToGet])
    .then((result) => {
      console.log("result.rows:", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error with our query:", queryText);
      res.sendStatus(500);
    });
});

module.exports = router;
