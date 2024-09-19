import { configureStore, createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      //
    }
  }
});

console.log(songSlice.actions.addSong('jello jee'));

// const store = configureStore({
//   reducer: {
//     songs: songSlice.reducer
//   }
// });

// // store.dispatch({
// //   type: 'song/addSong',
// //   payload: 'New Song'
// // });

// console.log(store.getState());