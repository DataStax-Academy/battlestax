import React from "react";
import { createGame } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { generateGameId } from "../../../util/random";
import { Button, Grid, Typography } from "@material-ui/core";
import { setId, selectId } from "../../../store/gameSlice";

export default function NewGame() {
  const dispatch = useDispatch();
  const gameId = useSelector(selectId);

  // Step 3: let's initialize a game
  const createAndInitGame = () => {
    // let's generate a random game id
    const newGameId = generateGameId();
    // let's update our local state
    dispatch(setId(newGameId));
    // let's provision a new game on Astra
    createGame(newGameId);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Typography color="textSecondary">welcome to</Typography>
        <Typography variant="h4" style={{ marginBottom: 64 }}>
          BattleStax
        </Typography>
        <Typography color="textSecondary">game code</Typography>
        <Typography variant="h1" className="highlight">
          {gameId || "----"}
        </Typography>
        <br />
        <Button
          style={{ marginTop: 32 }}
          disableElevation
          onClick={createAndInitGame}
          size="large"
          variant="contained"
          color="primary"
        >
          start new game
        </Button>
      </Grid>
    </Grid>
  );
}
