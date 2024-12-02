import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct';
import UpdateProduct from './components/UpdateProduct';
import Login from './components/Login';
import Register from './components/Register'; // Import Register component
import Navbar from './components/Navbar';

function App() {
  const isAuthenticated = localStorage.getItem('auth');

  return (
      <Router>
          {isAuthenticated && <Navbar title="Inventory Management" />}
          <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> {/* Register route */}
              <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate replace to="/login" />} />
              <Route path="/about" element={isAuthenticated ? <About /> : <Navigate replace to="/login" />} />
              <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate replace to="/login" />} />
              <Route path="/insertproduct" element={isAuthenticated ? <InsertProduct /> : <Navigate replace to="/login" />} />
              <Route path="/updateproduct/:id" element={isAuthenticated ? <UpdateProduct /> : <Navigate replace to="/login" />} />
          </Routes>
      </Router>
  );
}

export default App;
