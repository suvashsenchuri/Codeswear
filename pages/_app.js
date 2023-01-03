import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({}) || {}
  const [subTotal, setSubTotal] = useState()

  useEffect(() => {
    console.log('Hey i am useEffect from App.js');
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {

      localStorage.clear()
    }
  }, [])

  const addToCart = (itemCode, qty, price, name, size, variant) => {

    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    console.log('newCart', newCart);
    setCart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subT = 0
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty
      console.log('myCart price', myCart[keys[i]].price);
      console.log('myCart qty', myCart[keys[i]].qty);
    }
    setSubTotal(subT)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal}{...pageProps} />
    <Footer />
  </>
}

export default MyApp
