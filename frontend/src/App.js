import './App.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";



function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []); 
  return (
    <Router>
      <Header/>
      {/* <Home/> */}
      
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path="/product/:id" element={<ProductDetails/>}></Route>
      <Route exact path="/products" element={<Products/>}></Route>
      <Route  path="/products/:keyword" element={<Products/>}></Route>
      
      <Route exact path="/search" element={<Search/>}></Route>
      
      </Routes>
    
      <Footer/>
    </Router>
    

  );
}

export default App;
