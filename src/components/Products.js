import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


//take the products array from App.js and convert to lsit of products
const Products = ({allprods}) => {
    const [products, setProducts] = useState([]);
    const [typesLoaded, setTypesLoaded] = useState(false);
    const [types, setTypes] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);


///USEEFFECT CONTAINER
useEffect(() => {
if(!productsLoaded){
    //fetch products
fetch('http://localhost:3000/products').then(
  (response) => {
    response.json().then((data) => {
        setProducts(data.products);
        setProductsLoaded(true);
    });
});
}
if(!typesLoaded){
    fetch('http://localhost:3000/products/types').then(
        (response) => {
            response.json().then((data) => {
                //console.log("hvad er det her")
                setTypes(data);
                setTypesLoaded(true);
            });
        }
    );
}
});
///USEEFFECT CONTAINER/////

///TYPES CONTAINER
const Alltypes = types.map((type) => {
        return (
            <div>
            <button key={type} onClick={() => getProducts(type)}>
                <p>{type}s</p>
            </button>
            </div>
        );
    })
///TYPES CONTAINER

//ALL PRODUCTS CONTAINER
const AllProducts = products.map((product) => {
    return (
        <div  key={product.id}>
          <div>
          <Link to={`/products/${product.id}`}>{<img className="image" src={product.image} className='cat' />}</Link>
          </div>
          <h3>{product.title}</h3>
          <p>{product.shortdescription}</p>
        </div>
  );
});
//ALL PRODUCTS CONTAINER

//RETURN CONTAINER
//1.RETURNS BUTTONS FOR ALL TYPES
//2.RETURNS BUTTON FOR REMOVE FILTER -> setProducts to allproducts
//3.RETURN ALL PRODUCTS (DEFAULT)
return (
        <>
        <h1>Products Page</h1>
        <h4>Filter by categories</h4>
        <div id="main">
            {Alltypes}
            <button  onClick={() => setProducts(allprods)}>
                remove filter
                </button>
                </div>
                <div>
          {AllProducts}
          </div>
          
        </>
      );

//GET PRODUCT BY TYPEID
      function getProducts(type) {
        fetch('http://localhost:3000/products/types/' + type).then(
            (response) => {
                response.json().then((data) => {
                   setProducts(data);
                });
            }
        )};
//GET PRODUCT BY TYPEID

};
export default Products