import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Page/Home/Page"
import PaymentPage from "./Page/Payment/Page"
import ProductPage from "./Page/Product/Page"
import Home from './_TEST_/imageUpload_app'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/product/:id'></Route>
    <Route path='/product/' element={<ProductPage/>}></Route>
    <Route path='/home/' element={<Home/>}></Route>
    <Route path='/product/auth/login'></Route>
    <Route path='/product/auth/sign'></Route>
   </Routes>
   </>
  )
}

export default App