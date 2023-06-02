import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: { name: '' },
  reducers: {
    setFilterName(state, action) {
      state.name = action.payload;
    }
  }
})

export const { setFilterName } = filterSlice.actions;
export default filterSlice;