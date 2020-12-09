import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectGame, createGame } from "../../../store/gameSlice";

export default function NewGame() {
  const dispatch = useDispatch();
  const { id, idError, idLoading } = useSelector(selectGame);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Typography color="textSecondary">welcome to</Typography>
        <Typography variant="h4" style={{ marginBottom: 64 }}>
          BattleStax
        </Typography>
        <Typography color="textSecondary">game code</Typography>
        <Typography variant="h1" className="highlight">
        {/* let's display the game id */}
        {id || "----"}
        </Typography>
        <br />
        {/* let's make our button create a new game*/}
        <Button
          style={{ marginTop: 32, marginBottom: 32 }}
          disableElevation
          size="large"
          variant="contained"
          color="primary"
          disabled={idLoading}
          onClick={() => {
            dispatch(createGame());
          }}
        >
          start new game
        </Button>
        {/* let's show an error message if there is one */}
        {idError && (
          <Typography color="textSecondary">Error: {idError}</Typography>
        )}
      </Grid>
    </Grid>
  );
}
