import React from 'react'
import Layout from 'layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/home'
import Sign from 'pages/auth/sign'

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
