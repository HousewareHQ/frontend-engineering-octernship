import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'input',

  initialState: {
    text: '',
    previousText: '',
    finalTextArray: [],
  },

  reducers: {
    updateText(state, action) {
      // action.payload recieves value(e.target.value) from input
      state.text = action.payload;
      state.previousText = action.payload;

      // converted the text recieved from the input to lower case and removed the white space
      // Also converted to and array with the split method
      state.finalTextArray = action.payload
        .toLowerCase()
        .replace(' ', '')
        .split('');
    },

    clearTextInput(state, action) {
      state.text = '';
    },

    deleteFinalDulicates(state, action) {
      // acction.payload === {strValue, strIndex}
      let newArray = [];

      for (let i = 0; i < state.finalTextArray.length; i++) {
        if (
          state.finalTextArray[i] !== action.payload.strValue ||
          i === action.payload.strIndex
        ) {
          // Push the string value
          // if the string in the state does not contain the value to be deleted
          // OR the index of the string to be deleted === the current index the loop is iterating over
          newArray.push(state.finalTextArray[i]);
        }
      }

      // Set the state of the final array to be the index of the new array
      state.finalTextArray = newArray;
    },
  },
});

export const formReducer = formSlice.reducer;
export const { updateText, clearTextInput, deleteFinalDulicates } =
  formSlice.actions;
