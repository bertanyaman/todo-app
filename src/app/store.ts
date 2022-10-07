import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import tasksReducer from '../features/categories/tasksSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    tasks: tasksReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
