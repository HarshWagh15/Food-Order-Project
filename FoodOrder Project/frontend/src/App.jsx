import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./store";
import Profile from "./components/users/Profile"
import UpdateProfile from "./components/users/UpdateProfile"
import { loadUser } from "./actions/userAction";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";


export default function App() {
//dispatch exactly once when the component is first rendered,
//and check user is authenticated or not
 console.log(store);
 useEffect(()=> {
  store.dispatch(loadUser())
 },[]);


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
    <Route path="/users/me" element={<Profile />} />
    <Route path="/users/me/update" element={<UpdateProfile />} />
    <Route path="/users/forgotPassword" element={<ForgotPassword />} />
    <Route path="/users/resetPassword/:token" element={<NewPassword />} />
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
