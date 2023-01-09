import React from 'react'

const Order = ({subTotal}) => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #119977</h1>
                            <h1 className="text-gray-900 text-xl title-font font-normal mb-4">Your order has been succesfully placed.</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Description</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item Total</a>
                            </div>
                          
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Wear the code(Black)</span>
                                <span className="ml-auto text-gray-900">1</span>
                                <span className="ml-auto text-gray-900">49</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the code(Blue)</span>
                                <span className="ml-auto text-gray-900">1</span>
                                <span className="ml-auto text-gray-900">49</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Wear the code(Pink)</span>
                                <span className="ml-auto text-gray-900">1</span>
                                <span className="ml-auto text-gray-900">49</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">SubTotal : ${subTotal}</span>
                                <button className="flex ml-auto text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded">Track your order</button>
                                
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order