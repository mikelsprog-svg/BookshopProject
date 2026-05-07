import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import { Fragment } from 'react'
import Header from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
=======
import Header from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import './App.css'
>>>>>>> 2318615b8db3f112ab8a1f7b754fbd75d85285d8
import { CartProvider } from './context/cart/CartProvider'
import { CartPage } from './Pages/CartPage.jsx'
import './App.css'

function App() {
  return (
<<<<<<< HEAD
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
=======

    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>Página de inicio</div>} />
        <Route path="/SearchLibro" element={<div>Página de SearchLibro</div>} />
        <Route path="/BookPage" element={<div>BookPage</div>} />
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

>>>>>>> 2318615b8db3f112ab8a1f7b754fbd75d85285d8
  )
}

export default App