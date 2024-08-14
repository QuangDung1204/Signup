
import { createSlice } from '@reduxjs/toolkit'
import { notifi } from '../../utills/heple';

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: 'cards',
  initialState: {
    cart: [...cart]
  },
  reducers: {
    
    // them san pham vao gio hang
    addtoCart(state, action) {
      let index = state.cart.findIndex((item) => item.id === action.payload.id)
      let cart = [...state.cart]
      if (index === -1) {
        cart.push({ ...action.payload, quantity: 1 })
        state.cart = cart
      } else {
        state.cart[index].quantity += 1
      };
      localStorage.setItem("cart", JSON.stringify(cart))
      notifi('Thêm thành công')

    },

    // xoa san pham
    deleteCart: (state, action) => {
      const productId = action.payload;
      const foundProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );
      state.cart.splice(foundProductIndex, 1);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    // Them san pham
    increase(state, action) {
      const productId = action.payload;

      const foundProductExist = state.cart.findIndex(
        (product) => product.id === productId
      );

      state.cart[foundProductExist].quantity++;

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    // xoa san pham
    decreaseQuantity(state, action) {
      const id = action.payload;
      let cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === id);

      if (index !== -1) {
        cart[index].quantity -= 1;
      }

      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    },

    removeItem(state, action) {
      const id = action.payload;
      let cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    },

    
  }
})

export const { addtoCart, deleteCart, increase, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer