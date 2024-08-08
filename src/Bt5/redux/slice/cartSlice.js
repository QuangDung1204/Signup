
import { createSlice } from '@reduxjs/toolkit'
import { notifi, Toast } from '../../utills/heple';

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
    decrementQuantity: (state, action) => {
      const productId = action.payload;

      const foundProductExist = state.cart.findIndex(
        (product) => product.id === productId
      );

      if (foundProductExist !== -1) {
        if (state.cart[foundProductExist].quantity === 1) {
          const confirmDelete = window.confirm("Bạn có muốn xóa sản phẩm này không?");
          
          if (confirmDelete) {
            state.cart.splice(foundProductExist, 1);
          }
        } else {
          state.cart[foundProductExist].quantity--;
        }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    }},

    
  }
})

export const { addtoCart, deleteCart, increase, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer