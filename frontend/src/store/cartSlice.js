import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: JSON.parse(localStorage.getItem("CartData")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartData.push(action.payload);
      localStorage.setItem("CartData", JSON.stringify(state.cartData));
    },
    removeFromCart: (state, action) => {
      state.cartData.splice(action.payload, 1);
      localStorage.setItem("CartData", JSON.stringify(state.cartData));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
