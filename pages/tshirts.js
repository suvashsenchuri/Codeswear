import React from 'react'
import Link from 'next/link'

const tshirts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">
            <Link href={'/products/wear-the-code'} className='mx-auto md:mx-0'>
              <div className="p-10 w-full m-4 shadow-md">
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="h-[40vh] m-auto md:h-[46vh] block" src="https://m.media-amazon.com/images/I/71ia4eBqlTL._AC_SL1120_.jpg" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
                  <p className="mt-1">$16.00</p>
                  <p className="mt-1">S, M, L, XXL</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/wear-the-code'} className='mx-auto md:mx-0'>
              <div className="p-10 w-full m-4 shadow-md">
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="h-[40vh] m-auto md:h-[46vh] block" src="https://m.media-amazon.com/images/I/71ia4eBqlTL._AC_SL1120_.jpg" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
                  <p className="mt-1">$16.00</p>
                  <p className="mt-1">S, M, L, XXL</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/wear-the-code'} className='mx-auto md:mx-0'>
              <div className="p-10 w-full m-4 shadow-md">
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="h-[40vh] m-auto md:h-[46vh] block" src="https://m.media-amazon.com/images/I/71ia4eBqlTL._AC_SL1120_.jpg" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
                  <p className="mt-1">$16.00</p>
                  <p className="mt-1">S, M, L, XXL</p>
                </div>
              </div>
            </Link>

            <Link href={'/products/wear-the-code'} className='mx-auto md:mx-0'>
              <div className="p-10 w-full m-4 shadow-md">
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="h-[40vh] m-auto md:h-[46vh] block" src="https://m.media-amazon.com/images/I/71ia4eBqlTL._AC_SL1120_.jpg" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Wear The Code</h2>
                  <p className="mt-1">$16.00</p>
                  <p className="mt-1">S, M, L, XXL</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default tshirts