import { Fragment } from 'react'
import Header from './components/Header/Header'
import './App.css'
import { CartProvider } from './context/cart/CartProvider'
import { CartPage } from "./Pages/CartPage.jsx";

function App() {
  return (
    <CartProvider>
       <Fragment>
          <Header />
          <CartPage />
       </Fragment>
    </CartProvider>
  )
}

export default App