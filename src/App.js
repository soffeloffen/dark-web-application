import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect, useMemo } from "react";
import Products from "./components/Products.js";
import HomePage from './components/HomePage.js'
import Basket from "./components/Basket";
import ProductDetail from "./components/ProductDetail";
import { UserContext } from "./components/UserContext";
import { LoginForm } from "./components/LoginForm";
import "./App.css";
import "./product.css";
// import { Router } from "express";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {

  const [products, setProducts] = useState([]);
  const [signedInUser, setSignedInUser] = useState(undefined);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <UserContext.Provider value={{signedInUser, setSignedInUser}}>
          <Routes>
            <Route path="" element={<HomePage allproducts={products} />}></Route>
            <Route path="/Basket" element={<Basket />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/SignIn" element={<LoginForm />}></Route>
            <Route path="/products/:productId" element={<ProductDetail/>}></Route>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
