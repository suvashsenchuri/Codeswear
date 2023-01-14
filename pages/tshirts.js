import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../models/Product'

const tshirts = ({ products }) => {
  console.log(products)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">

            {products.map((productItem) => {
              return <div key={productItem._id}>
                <Link passHref={true} href={`/products/${productItem.slug}`} className='mx-auto md:mx-0'>
                  <div className="p-10 w-full m-4 shadow-md">
                    <div className="block relative rounded overflow-hidden">
                      <img alt="ecommerce" className="h-[40vh] m-auto md:h-[46vh] block" src={productItem.img} />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{productItem.title}</h2>
                      <p className="mt-1">${productItem.price}</p>
                      <p className="mt-1">{productItem.size}</p>
                    </div>
                  </div>
                </Link>
              </div>
            })}

          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: "tshirt" })

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}

export default tshirts