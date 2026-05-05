import { Fragment } from 'react'
import Header from './components/Header/Header'
import './App.css'
import {Products} from "./Pages/Products.jsx";
import { CartProvider } from './context/cart/CartProvider'

function App() {
  return (
    <CartProvider>
       <Fragment>
          <Header />
          <Products />
       </Fragment>
    </CartProvider>
  )
}

export default App