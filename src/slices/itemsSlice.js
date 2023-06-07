import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getItems = createAsyncThunk('items/getItems', async () => {
    const response = await fetch("http://localhost:8000/items/");
    const json = await response.json();
    if (response.ok) {
      return json
    } else {
      console.log("error fetching");
    }
  } )

const initialState = {
  items: null,
  isError: false,
  isLoading: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.fulfilled, (state, action) => {
        state.isError = false;
        state.items = action.payload;
      })
      .addCase(getItems.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.isError = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(createItem.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isError = false;
        state.items =  state.items.filter(
            (item) => item._id !== action.payload._id
          )
      .addCase(deleteItem.rejected, (state, action) => {
        state.isError = true;
      });
      ;
  },
});

export const { getItems, createItem, deleteItem } = itemsSlice.actions;
