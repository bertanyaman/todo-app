import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../entities/ITask';

export interface IDictionary<T> {
  [Key: string]: T;
}

export interface TasksState {
  items: IDictionary<ITask[]>
}

const initialState: TasksState = {
  items: {
  }
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ categoryKey: string, task: ITask }>) => {
      const { categoryKey, task } = action.payload;
      state.items[categoryKey].push(task);
    },
    remove: (state, action: PayloadAction<{ categoryKey: string, taskKey: string }>) => {
      const { categoryKey, taskKey } = action.payload;
      let index = state.items[categoryKey].findIndex(i => i.key === taskKey);
      if (index !== -1) {
        state.items[categoryKey].splice(index, 1);
      }
    }
  }
});

export const { add, remove } = tasksSlice.actions;
export default tasksSlice.reducer;
