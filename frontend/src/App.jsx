import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
  <div className="app">
  <Header />
  <div className="container container-fluid">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/eats/stores/:id/menus" element={<Menu />}/>
    <Route path="/users/login" element={<Login />}/>
    <Route path="/users/signup" element={<Register />}/>
  </Routes>
  <Cart />
  </div>
  <div>
    <Footer />
  </div>
  </div>
  </BrowserRouter>
  );
}
