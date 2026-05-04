import { Fragment } from 'react'
import Header from './components/Header/Header'
import './App.css'
import {Products} from "./Pages/Products.jsx";

function App() {
  return (
    <Fragment>
      <Header />
        <Products/>

    </Fragment>
  )
}

export default App