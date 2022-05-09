import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./HomePage.css";
import { useState, useEffect } from "react";


//take the products array from App.js and convert to list of products
const ProductsOnSale = () => {
  const [allProducts, setAllProducts] = useState([]);

  /* START  GET ALL PRODUCTS    */
    useEffect(() => {
        const getAllProducts = async () => {
            const productsAllFromServer = await fetchAllProducts()
            setAllProducts(productsAllFromServer)
        }
        getAllProducts()
    }, [])

    //fetch products
    const fetchAllProducts = async () => {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        console.log(data)
        return data.products
    }
  /* END  GET ALL PRODUCTS    */ 

  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const products = allProducts.map((product) => {
    //A div to show title and image - with link to product detail page for that prod id
    const ProdOnSaleDiv = (
      <div >
        <h3>{product.title}</h3>
        <div>
          <Link to={`/products/${product.id}`}>
            {<img className="img" src={product.image} />}
          </Link>
          <p>Price: {product.price}$ {product.currency}</p>
        </div>
      </div>
    );
    //return ProdOnSaleDiv if that product's onsale attribute ==true
    return (
      <div key={product.id}>
        <b>{product.onsale == true ? ProdOnSaleDiv : ""}</b>
      </div>
    );
  });

  const welcomeGreeting = () => {
    let greeting = "Welcome to the Dark Web ";

    if(signedInUser){
      greeting  += signedInUser.Fullname;
    }
    return <h1 className="title">{greeting}</h1>
  }

  //return to the page, the welcome title and the list of products (which here is only products onsale)
  return (
    <>
      {welcomeGreeting()}
      <h3 className="caption">Products On Sale !!</h3>
      <div className="products" >{products}</div>
    </>
  );
};

export default ProductsOnSale;
