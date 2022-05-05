import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//take the products array from App.js and convert to lsit of products
//return to Product.js
const Products = ({ allproducts }) => {
const [categories, setCategories] = useState([]);
const [productsLoaded, setProductsLoaded] = useState(false);
const [categoriesLoaded, setCategoriesLoaded] = useState(false);
const [types, setTypes] = useState({types: {}})


useEffect(() => {
    const getTypes = async () => {
    const typesFromServer = await fetchTypes()
    setTypes(typesFromServer)}
    getTypes()
}, [])

//fetch product with given productId
const fetchTypes = async () => {
    const res = await fetch(`http://localhost:3000/products/types/`)
    const data = await res.json()
    console.log(types)
    console.log(data)
    //return data[0] because the API call returns a list with one element at place 0
    return data.types
}



const products = allproducts.map((product) => {
    return (
        <div key={product.id}>
          <div>
          <Link to={`/products/${product.id}`}>{<img className="image" src={product.image} className='cat' />}</Link>
          </div>
          <h3>{product.title}</h3>
        </div>
  );
});


return (
        <>
        <h1>hey</h1>
          <h1>Products Page</h1>
          {products}
        </>
      );
};
    
export default Products


/*
const products = allproducts.map((product) => {
        return (
          <div key={product.id}>
            <div>
            <Link to={`/products/${product.id}`}>{<img className="image" src={product.image} className='cat' />}</Link>
            </div>
            <h3>{product.title}</h3>
          </div>
    );
});

*/