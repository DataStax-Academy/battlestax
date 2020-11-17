import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  id: "",
};

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Step 2: let's add a reducer that sets the game id
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

// Step 2: let's return an action and a selector
export const { setId } = slice.actions;
export const selectId = (state) => state.game.id;

export default slice.reducer;
