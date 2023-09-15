import React from 'react'
import Layout from 'layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home/home'

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
