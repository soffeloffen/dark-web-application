import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect, useMemo } from "react";
import Products from "./components/Products.js";
import ProductsOnSale from './components/ProductsOnSale.js'
import Basket from "./components/Basket";
import "./App.css";
import "./product.css";
// import { Router } from "express";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { UserContext } from "./components/UserContext";

const App = () => {
  const [products, setProducts, productsonsale] = useState([]);


  /*   GET ALL PRODUCTS    */
    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()
            setProducts(productsFromServer)
        }
        getProducts()
    }, [])

    //fetch products
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        console.log(data)
        return data.products
    }

  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <UserContext.Provider value={""}>
          <Routes>
            <Route path="/" element={<ProductsOnSale products = { products } />}></Route>
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
