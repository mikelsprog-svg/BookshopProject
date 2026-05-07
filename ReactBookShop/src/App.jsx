import { Fragment } from 'react'
import Header from './components/Header/Header'
import './App.css'
import {Products} from "./Pages/Products.jsx";
import { CartProvider } from './context/cart/CartProvider'
import {ProductPage} from "./Pages/ProductPage.jsx";

function App() {
  return (
    <CartProvider>
       <Fragment>
          <Header />
          <ProductPage />
       </Fragment>
    </CartProvider>
  )
}

export default App