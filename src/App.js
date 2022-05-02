import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect, useMemo } from "react";
import Products from "./components/Products.js";
import Basket from "./components/Basket";
import "./App.css";
import "./product.css";
// import { Router } from "express";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { UserContext } from "./components/UserContext";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };
    getProducts();
  }, []);

  //fetch products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    console.log(data);
    return data.products;
  };

  const value = useState(LoginForm.data);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" element=""></Route>
            <Route path="/Basket" element={<Basket />}></Route>
            <Route
              path="/Products"
              element={<Products products={products} />}
            ></Route>
            <Route path="/SignIn" element={<LoginForm />}></Route>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
