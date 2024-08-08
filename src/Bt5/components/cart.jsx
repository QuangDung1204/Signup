import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, increase, decrementQuantity } from '../redux/slice/cartSlice';
import Hearder from './Header';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);


  const removeCart = (index) => {
    dispatch(deleteCart(index))
  }


  let totalAmount = function () {
    var total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const SHIPPING = 500000;



  return (
    <div>
      <Hearder />
      <div className='container mt-14 pb-20'>
        <div className='mt-8 flex items-start justify-between gap-8'>
          <div>
            {cart.map((product, index) => (
              <div
                key={index}
                className='shadow-md mt-5 w-[780px] h-[170px] border rounded-lg flex py-8 px-4 items-start justify-between'>
                <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>

                  <img
                    src={product.imgURL}
                    alt=''
                    className='h-full w-[210px] object-contain' />

                  <div className='sm:ml-4 sm:w-full'>

                    <p className='text-lg font-bold text-gray-900'>{product.name}</p>

                    <p className='mt-1 text-xs text-gray-700'>
                      {(product.price * product.quantity).toLocaleString('it-IT', {
                        style: 'currency',
                        currency: 'VND',
                      })}

                    </p>

                  </div>

                  <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <button onClick={() => { dispatch(decrementQuantity(product.id)) }} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>

                      <div className="h-8 w-8 pt-1.5 border bg-white text-center text-xs outline-none">
                        {product.quantity}
                      </div>

                      <button onClick={() => { dispatch(increase(product.id)) }} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm"></p>

                      <button onClick={() => removeCart(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className='shadow-xl mt-5 border w-[calc(100%-850px)] px-20 py-8 text-lg'>
            <div className='flex items-center justify-between'>
              <p>Subtotal:</p>
              <p>
                {totalAmount().toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </p>
            </div>

            <div className='mt-5 flex items-center justify-between'>
              <p>Shipping:</p>
              <p>
                {SHIPPING.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </p>
            </div>

            <div className='pt-5 mt-5 border-t flex items-center justify-between font-semibold text-xl'>
              <p>Total:</p>
              <p>
                {(totalAmount() + SHIPPING).toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </p>
            </div>

            <button className='mt-7 w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Cart;