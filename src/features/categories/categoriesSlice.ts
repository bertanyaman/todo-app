import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../entities/ICategory';
import { ITask } from '../../entities/ITask';

export interface IDictionary<T> {
  [Key: string]: T;
}

export interface categoriesState {
  items: IDictionary<ICategory>,
  activeKey: string
}

const initialState: categoriesState = {
  items: {
    "1": {
      label: "General",
      id: "1",
      closable: false,
      tasks: []
    }
  },
  activeKey: "1"
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategory>) => {
      state.items[action.payload.id] = action.payload;
      state.activeKey = action.payload.id;
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
      state.activeKey = "1";
    },
    setActiveKey: (state, action: PayloadAction<string>) => {
      state.activeKey = action.payload;
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.items[state.activeKey].tasks?.push(action.payload);
    },
    updateComplete: (state, action: PayloadAction<ITask>) => {

      const tasks = state.items[state.activeKey].tasks;
      if (tasks) {
        const targetTaskIndex = tasks.findIndex(i => i.id === action.payload.id);
        let targetTask = tasks.at(targetTaskIndex);
        if (targetTask) {
          targetTask.isComplete = action.payload.isComplete;
        }
      }

    },
    updateFlag: (state, action: PayloadAction<ITask>) => {
      const tasks = state.items[state.activeKey].tasks;
      if (tasks) {
        const targetTaskIndex = tasks.findIndex(i => i.id === action.payload.id);
        let targetTask = tasks.at(targetTaskIndex);
        if (targetTask) {
          targetTask.flag = action.payload.flag;
        }
      }
    },
    removeTask: (state, action: PayloadAction<{ categoryKey: string, taskKey: string }>) => {
      // const { taskKey } = action.payload;
      // let taskIndex = state.items.findIndex(i => i.key === taskKey);
      // if (taskIndex !== -1) {
      //   let category = state.items.find(i => i.key === state.activeKey);
      //   category?.tasks?.splice(taskIndex, 1);
      // }
    }
  }
});

export const { addCategory, removeCategory, setActiveKey, addTask, updateComplete, updateFlag, removeTask } = categoriesSlice.actions;
export default categoriesSlice.reducer;
