import React from 'react'
import Link from 'next/link'

const stickers = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">
            <Link href={'/products/wear-the-code'} className='mx-auto md:mx-0'>
              <div className="m-4 p-4 w-full shadow-md">
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="h-[40vh] m-auto block" src="https://m.media-amazon.com/images/I/71fthlvrlsL._AC_UL480_FMwebp_QL65_.jpg" />
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
              <div className="m-4 p-4 w-full shadow-md">
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="h-[40vh] m-auto block" src="https://m.media-amazon.com/images/I/71fthlvrlsL._AC_UL480_FMwebp_QL65_.jpg" />
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
              <div className="m-4 p-4 w-full shadow-md">
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="h-[40vh] m-auto block" src="https://m.media-amazon.com/images/I/71fthlvrlsL._AC_UL480_FMwebp_QL65_.jpg" />
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
              <div className="m-4 p-4 w-full shadow-md">
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="h-[40vh] m-auto block" src="https://m.media-amazon.com/images/I/71fthlvrlsL._AC_UL480_FMwebp_QL65_.jpg" />
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

export default stickers