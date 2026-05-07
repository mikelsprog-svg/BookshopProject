import { Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import Header from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { CartProvider } from './context/cart/CartProvider'
import { CartPage } from './Pages/CartPage.jsx'
import './App.css'

function App() {
  return (
    <CartProvider>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<div>Página de inicio</div>} />
          <Route path="/SearchLibro" element={<div>Página de SearchLibro</div>} />
          <Route path="/BookPage" element={<div>BookPage</div>} />
          <Route path="/login" element={<div>Página de login</div>} />
          <Route path="/CartPage" element={<CartPage />} />
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
      </Fragment>
    </CartProvider>
  )
}

export default App