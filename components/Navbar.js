import Image from 'next/image'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBagCheckFill, BsFillCartXFill } from 'react-icons/bs'
import Link from 'next/link';
import { useRef } from 'react';

const Navbar = () => {

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
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md mb-1 py-2'>
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
        onClick={toggleCart}
        className="cursor-pointer cart absolute right-0 mx-5 top-3">
        <AiOutlineShoppingCart className='text-2xl' />
      </div>

      {/* Sidecart */}
      <div
        ref={ref}
        className='h-full w-[36vh] sidecart absolute right-0 top-0 bg-cyan-100 p-7 rounded-bl-lg shadow-md transform
      transition-transform translate-x-full'>
        <h2 className='font-semibold text-lg text-center'>Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className='top-2 right-2 absolute text-2xl text-cyan-500 cursor-pointer'>
          <AiFillCloseCircle />
        </span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className='flex my-3'>
              <div className='w-2/3'>T-shirt - wear the code </div>
              <div className='w-1/3 flex items-center justify-center text-lg '>
                <AiFillMinusCircle className='mx-1 text-lg cursor-pointer text-cyan-500' />
                1
                <AiFillPlusCircle className='mx-1 text-lg cursor-pointer text-cyan-500' />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
          <button className="shadow-md flex mx-auto mt-16 text-white bg-cyan-500 border-0 py-2 px-2 focus:outline-none hover:bg-cyan-600 rounded text-sm">
            <BsFillBagCheckFill className='m-1' />
            Checkout</button>
          <button className="shadow-md flex mx-auto mt-16 text-white bg-cyan-500 border-0 py-2 px-2 focus:outline-none hover:bg-cyan-600 rounded text-">
            <BsFillCartXFill className='m-1' />
            Clear Cart</button>
        </div>
      </div>
    </div >
  )
}

export default Navbar