import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../entities/ICategory';

export interface categoriesState {
  items: ICategory[]
  activeKey: string
}

const initialState: categoriesState = {
  items: [
    {
      label: "General",
      key: "1",
      closable: false
    }
  ],
  activeKey: "1"
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICategory>) => {
      state.items.push(action.payload);
      state.activeKey = action.payload.key;
    },
    remove: (state, action: PayloadAction<string>) => {
      let index = state.items.findIndex(i => i.key === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.activeKey = state.items[index - 1].key;
      }
    },
    setActiveKey: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.activeKey = action.payload;
    }
  }
});

export const { add, remove, setActiveKey } = categoriesSlice.actions;
export default categoriesSlice.reducer;
