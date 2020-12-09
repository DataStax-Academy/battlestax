import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
//let's import what we need
import { useSelector } from "react-redux";
import { selectGame } from "../../../store/gameSlice";

export default function NewGame() {
  // let's connect Redux to our Component
  const { idError, idLoading } = useSelector(selectGame);
  const [compliment, setCompliment] = useState("");
  const [counter, setCounter] = useState(0);
  const complimentList = [
      "\"You’re not like anyone I've met before.\"",
      "\"I'm better when I'm with you.\"",
      "\"You’re my favorite person to spend time with.\"",
      "\"You are my candle in darkness.\"",
      "\"I can’t imagine my life without you in it\"",
      "\"I smile thinking about you when I’m alone.\"",
      "\"You have the sweetest heart\"",
      "\"I love you\"",
  ]

  const handleClick = function () {
    setCompliment(complimentList[counter]);
    setCounter((counter + 1) % complimentList.length);
  };

  return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Typography variant="h5"  style={{ marginBottom: 64 }}>Abdullah tells compliments to Anna</Typography>
          <Typography variant="h6" className="highlight" style={{ color: "red" }}>
            { compliment }
          </Typography>
          <br />
          {/* let's make our button create a new game*/}
          <Button
              disabled={idLoading}
              onClick={handleClick}
              style={{ marginTop: 32, marginBottom: 32 }}
              disableElevation
              size="large"
              variant="contained"
              color="primary"
          >
            Tell me something true
          </Button>
          {/* let's show an error message if there is one */}
          {idError && (
              <Typography color="textSecondary">Error: {idError}</Typography>
          )}
        </Grid>
      </Grid>
  );
}