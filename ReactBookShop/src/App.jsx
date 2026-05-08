import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import './App.css'
import { CartProvider } from './context/cart/CartProvider'
import { CartPage } from "./Pages/CartPage.jsx";
import { CheckoutPage } from "./Pages/CheckoutPage.jsx";
import { CartContext } from './context/cart/CartContext.jsx'
import {Products} from "./Pages/Products.jsx";
import {ProductPage} from "./Pages/ProductPage.jsx";
import { Landing } from "./Pages/Landing.jsx";
import { Login } from "./Pages/Login.jsx";
import {ProfilePage} from "./Pages/ProfilePage.jsx";
import Footer from './components/Footer/Footer'
function App() {
  return (

    <>
      <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/SearchLibro" element={<Products/>} />
        <Route path="/BookPage" element={<ProductPage/>} />
        <Route path="/Login" element={<div><Login /></div>} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/CartPage" element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        } />
        <Route path="/profileLOCKED" element={
          <PrivateRoute>
            <div><ProfilePage/></div>
          </PrivateRoute>
        } />
        <Route path="/chekoutLOCKED" element={
          <PrivateRoute>
            <div><CheckoutPage/></div>
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
      </CartProvider>
    </>

  )
}

export default App