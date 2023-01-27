import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../models/Product'

const tshirts = ({ tshirts }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">

            {Object.keys(tshirts).map((items) => {
              return (
                <div key={tshirts._id}>
                  <Link passHref={true} href={`/product/${tshirts[items].slug}`} className='mx-auto md:mx-0'>
                    <div className="p-10 w-full m-4 shadow-md">
                      <div className="block relative rounded overflow-hidden">
                        <img alt="ecommerce" className="h-[40vh] m-auto md:h-[46vh] block" src={tshirts[items].img} />
                      </div>
                      <div className="mt-4 text-center md:text-left">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{tshirts[items].title}</h2>
                        <p className="mt-1">${tshirts[items].price}</p>
                        <div className="mt-1">
                         {tshirts[items].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                         {tshirts[items].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                         {tshirts[items].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                         {tshirts[items].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                        </div>
                        <div className="mt-1">
                        {tshirts[items].color.includes('red') &&  <button className="border-2  rounded-full w-5 h-5 focus:outline-none bg-red-500"></button>}
                        {tshirts[items].color.includes('green') &&  <button className="border-2  rounded-full w-5 h-5 focus:outline-none bg-green-500"></button>}
                        {tshirts[items].color.includes('blue') &&  <button className="border-2  rounded-full w-5 h-5 focus:outline-none bg-blue-500"></button>}
                        {tshirts[items].color.includes('black') &&  <button className="border-2  rounded-full w-5 h-5 focus:outline-none bg-slate-900"></button>}
                        {tshirts[items].color.includes('purple') &&  <button className="border-2  rounded-full w-5 h-5 focus:outline-none bg-purple-500"></button>}
                        {tshirts[items].color.includes('yellow') &&  <button className="border-2  rounded-full w-5 h-5 focus:outline-none bg-yellow-400"></button>}

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find()

  let tshirts = {}
  for (let items of products) {
    if (items.title in tshirts) {
      if (!tshirts[items.title].size.includes(items.size) && items.availableQty > 0) {
        tshirts[items.title].size.push(items.size)
      }

      if (!tshirts[items.title].color.includes(items.color) && items.availableQty > 0) {
        tshirts[items.title].color.push(items.color)
      }

    } else {
      tshirts[items.title] = JSON.parse(JSON.stringify(items))
      if (items.availableQty > 0) {
        tshirts[items.title].color = [items.color]
        tshirts[items.title].size = [items.size]
      }
    }
  }

  return {
    props: { tshirts: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  }
}

export default tshirts