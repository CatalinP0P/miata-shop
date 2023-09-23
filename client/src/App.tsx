import React from 'react'
import Layout from 'layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/home'
import Sign from 'pages/auth/sign/sign'
import { AuthProvider } from 'context/authContext'
import Register from 'pages/auth/register/register'
import Search from 'pages/search/search'
import Product from 'pages/product/product'
import { CartProvider } from 'context/cartContext'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth/sign" element={<Sign />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/search" element={<Search />} />
              <Route path="/product/:slug" element={<Product />} />
              <Route path="*" element={<label>Error 404</label>} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}
