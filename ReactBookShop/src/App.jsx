import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import './App.css'
import { CartProvider } from './context/cart/CartProvider'
import { CartPage } from "./Pages/CartPage.jsx";
import {Products} from "./Pages/Products.jsx";
import {ProductPage} from "./Pages/ProductPage.jsx";

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>Página de inicio</div>} />
        <Route path="/SearchLibro" element={<Products/>} />
        <Route path="/BookPage" element={<ProductPage/>} />
        <Route path="/login" element={<div>Página de login</div>} />
        <Route path="/CartPage" element={<div>Página de CartPage</div>} />
        <Route path="/puchasepreview" element={<div>puchasepreview</div>} />
        <Route path="/profileLOCKED" element={
          <PrivateRoute>
            <div>Página de profile</div>
          </PrivateRoute>
        } />
        <Route path="/chekoutLOCKED" element={
          <PrivateRoute>
            <div>chekoutLOCKED</div>
          </PrivateRoute>
        } />
      </Routes>
    </>

  )
}

export default App