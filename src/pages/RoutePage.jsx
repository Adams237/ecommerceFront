import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Anoncement from '../components/Anoncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
const RoutePage = () => {
    return (
        <>
            <Anoncement />
            <Navbar />
            <Routes>
                <Route path="/">
                <Route path="products/:category" element={<ProductList />} />
                <Route path='product/:id' element={<ProductDetail/>} />
                <Route path='cart/' element={<Cart/>} />
                </Route>
            </Routes>
            <NewsLetter />
            <Footer />
        </>
    )
}

export default RoutePage