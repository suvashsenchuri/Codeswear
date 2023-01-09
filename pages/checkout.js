import React from 'react'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBagCheckFill, BsFillCartXFill } from 'react-icons/bs'
import Link from 'next/link';

const checkout = ({ addToCart, removeFromCart, cart, clearCart, subTotal }) => {
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-2xl text-center my-2'>Checkout</h1>
      <div className='md:px-36'>
        <h2 className='text-xl font-semibold'>1. Delivery Details</h2>
        <div className='mx-auto flex py-2'>
          <div className='px-2 w-1/2'>
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="name" id="name" name="name" className="w-full bg-gray-50 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='px-2 w-1/2'>
            <div className="mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-50 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className='px-2 w-min-full'>
          <div className="mb-4">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <input type="textarea" id="address" name="address" className="w-full bg-gray-50 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className='mx-auto flex py-2'>
          <div className='px-2 w-1/2'>
            <div className="mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="phone" id="phone" name="phone" className="w-full bg-gray-50 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='px-2 w-1/2'>
            <div className="mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
              <input type="city" id="city" name="city" className="w-full bg-gray-50 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>

        <div className='mx-auto flex py-2'>
          <div className='px-2 w-1/2'>
            <div className="mb-4">
              <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
              <input type="state" id="state" name="state" className="w-full bg-gray-50 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='px-2 w-1/2'>
            <div className="mb-4">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
              <input type="pincode" id="pincode" name="pincode" className="w-full bg-gray-50 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <h2 className='text-xl font-semibold mb-2'>2. Review Cart Item</h2>
        <div
          className='sidecart bg-cyan-100 p-6 m-2 rounded-bl-lg shadow-md'>
          <ol className='list-decimal font-semibold'>

            {Object.keys(cart).length == 0 &&
              <div className='py-2 font-normal'>No items in the cart</div>
            }
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className='flex my-3'>
                    <div className=''>{cart[k].name} </div>
                    <div className='w-1/3 flex items-center justify-center text-lg '>
                      <AiFillMinusCircle
                        onClick={() => { removeFromCart(k, 1, cart[k].qty, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}
                        className='mx-1 text-lg cursor-pointer text-cyan-500' />
                      {cart[k].qty}
                      <AiFillPlusCircle
                        onClick={() => { addToCart(k, 1, cart[k].qty, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}
                        className='mx-1 text-lg cursor-pointer text-cyan-500' />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
          <span>Subtotal : ${subTotal}</span>
        </div>
        <div className="mx-4">
          <Link href={'/checkout'}>
            <button className="shadow-md flex justify-start mx-auto text-white bg-cyan-500 border-0 py-2 px-2 focus:outline-none hover:bg-cyan-600 rounded text-sm">
              <BsFillBagCheckFill className='m-1' />
              Pay: ${subTotal} </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default checkout