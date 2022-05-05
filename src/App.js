import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect, useMemo } from "react";
import Products from "./components/Products.js";
import HomePage from './components/HomePage.js'
import Basket from "./components/Basket";
import ProductDetail from "./components/ProductDetail";
import "./App.css";
import "./product.css";
// import { Router } from "express";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { UserContext } from "./components/UserContext";

const App = () => {
  const [products, setProducts] = useState([]);
  const [signedInUser, setSignedInUser] = useState("");


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
        <UserContext.Provider value={{signedInUser, setSignedInUser}}>
          <Routes>
            <Route path="/" element={<HomePage allproducts={products} />}></Route>
            <Route path="/Basket" element={<Basket />}></Route>
            <Route path="/products" element={<Products allproducts={products} />}></Route>
            <Route path="/SignIn" element={<LoginForm />}></Route>
            <Route path="/products/:productId" element={<ProductDetail allproducts={products}/>}></Route>
          </Routes>
        </UserContext.Provider>
      </Router>


      
    
    </div>
  );
};

export default App;
