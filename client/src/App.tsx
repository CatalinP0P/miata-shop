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
import Error404 from 'pages/error404/error404'
import CheckoutSuccess from 'pages/checkoutSuccess/checkoutSuccess'
import MyOrders from 'pages/myOrders/myOrders'
import Order from 'pages/order/order'

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
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-orders/:id" element={<Order />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}
