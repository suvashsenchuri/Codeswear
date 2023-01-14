import Image from 'next/image'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"; 
import { BsFillBagCheckFill, BsFillCartXFill } from 'react-icons/bs'
import { RiAccountCircleFill } from 'react-icons/ri'
import Link from 'next/link';
import { useRef } from 'react';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const ref = useRef()

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md mb-1 py-2 sticky top-0 bg-white z-10'>
      <div className="logo">
        <Link href={'/'}>
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/logo.webp"
              alt="logo"
              height={40}
              width={200} />
          </div>
        </Link>
      </div>
      <div className="main-menu">
        <ul className='flex items-center space-x-6 font-bold md:text-lg'>
          <Link href={'/tshirts'}><li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li></Link>
          <Link href={'/stickers'}><li>Stickers</li></Link>
          <Link href={'/mugs'}><li>Mugs</li></Link>
        </ul>
      </div>

      <div
        className="cursor-pointer cart absolute right-0 mx-5 top-3 flex space-x-2">
        <Link href={'/login'}><RiAccountCircleFill className='text-2xl' /></Link>
        <AiOutlineShoppingCart onClick={toggleCart} className='text-2xl' />
      </div>

      {/* Sidecart */}
      <div
        ref={ref}
        className={`h-[100vh] w-[36vh] md:w-[40vh] sidecart absolute right-0 top-0 bg-cyan-100 p-7 rounded-bl-lg shadow-md transform
      transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
        <h2 className='font-semibold text-lg text-center'>Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className='top-2 right-2 absolute text-2xl text-cyan-500 cursor-pointer'>

          <AiFillCloseCircle />
        </span>
        <ol className='list-decimal font-semibold'>

          {Object.keys(cart).length == 0 &&
            <div className='py-2 font-normal'>No items in the cart</div>
          }
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className='flex my-3'>
                  <div className='w-2/3'>{cart[k].name} </div>
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
        <div>Subtotal : <span className='font-semibold'>${subTotal}</span></div>
        <div className="flex">
          <Link href={'/checkout'}>
            <button className="shadow-md flex mx-auto mt-5 text-white bg-cyan-500 border-0 py-2 px-2 focus:outline-none hover:bg-cyan-600 rounded text-sm">
              <BsFillBagCheckFill className='m-1' />
              Checkout</button>
          </Link>
          <button
            onClick={clearCart}
            className="shadow-md flex mx-auto mt-5 text-white bg-cyan-500 border-0 py-2 px-2 focus:outline-none hover:bg-cyan-600 rounded text-">
            <BsFillCartXFill className='m-1' />
            Clear Cart</button>
        </div>
      </div>
    </div >
  )
}

export default Navbar