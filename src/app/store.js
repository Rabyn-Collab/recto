import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../features/posts/postSlice";
import { todoApi } from "../features/todos/todosApi";
import { cocktailApi } from "../features/cocktails/cocktailApi";



export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath]: cocktailApi.reducer,
    [postSlice.name]: postSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    cocktailApi.middleware,
    todoApi.middleware
  ])
});