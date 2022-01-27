import { configureStore } from "@reduxjs/toolkit";
import { arrondissement, lieudetournage } from "./components/Map/MapSlice";

export const store = configureStore({
  reducer: {
    arrondissement: arrondissement,
    lieuDeTournage: lieudetournage,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
