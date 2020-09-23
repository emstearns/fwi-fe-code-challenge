import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dialogType: null,
  dialogProps: {},
  visible: false,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action) => {
      const { type, props } = action.payload;
      state.dialogType = type;
      state.dialogProps = props;
      state.visible = true;
    },
    //closing the dialog will always reset it
    closeDialog: () => initialState,
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
