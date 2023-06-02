import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {data: []},
  reducers: {
    addContact: {
      reducer(state, action) {
      state.data.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.data.findIndex(task => task.id === action.payload);
      state.data.splice(index, 1);
    }
  }
})

export const {addContact, deleteContact} = contactsSlice.actions
export default contactsSlice;