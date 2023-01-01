import Image from 'next/image'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';

const Navbar = () => {
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
      <div className="cart absolute right-0 mx-5 top-3">
        <AiOutlineShoppingCart className='text-2xl' />
      </div>
    </div>
  )
}

export default Navbar