import React from 'react'
import Link from 'next/link'

const forgotpassword = () => {
  return (
    <div>
      <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}
        <div class="bg-gray-100 flex rounded-2xl shadow-lg min-w-full justify-center p-5 items-center">
          {/* <!-- form --> */}
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-bold text-2xl text-[#002D74]">Forget Password?</h2>
          

            <form action="" class="flex flex-col gap-4">
              <input class="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
              <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Continue</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default forgotpassword