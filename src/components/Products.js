import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//npm install react-bootstrap
import { Carousel } from 'react-bootstrap';

//take the products array from App.js and convert to lsit of products
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [typesLoaded, setTypesLoaded] = useState(false);
  const [types, setTypes] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [signedInUser, setSignedInUser] = useState("");
  

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

  ///USEEFFECT CONTAINER
  useEffect(() => {
    if (!productsLoaded) {
      //fetch products
      fetch("http://localhost:3000/products").then((response) => {
        response.json().then((data) => {
          setProducts(data.products);
          setProductsLoaded(true);
        });
      });
    }
    if (!typesLoaded) {
      fetch("http://localhost:3000/products/types").then((response) => {
        response.json().then((data) => {
          //console.log("hvad er det her")
          setTypes(data);
          setTypesLoaded(true);
        });
      });
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
  });
  ///TYPES CONTAINER

  
  //ALL PRODUCTS CONTAINER
  const AllProducts = products.map((product) => {
    return (
        <div>
        <div className='container-fluid' >
        <div className="row">
        <div className="col-12">
        <Carousel>
        <Carousel.Item>
            <div className="wrapper" key={product.id}>
                <div>
               <Link to={`/products/${product.id}`}>
                    {<img className="image" src={product.image} />}
                 </Link>
             <Carousel.Caption>
                <h3>{product.title}</h3>
                 <p>{product.shortdescription}</p>
            </Carousel.Caption>
            </div>
            </div>
            </Carousel.Item>
            </Carousel>
        </div>
        </div>
        </div>
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
        <button onClick={() => setProducts(allProducts)}>remove filter</button>
      </div>
      <div>{AllProducts}</div>
    </>
  );

  //GET PRODUCT BY TYPEID
  function getProducts(type) {
    fetch("http://localhost:3000/products/types/" + type).then((response) => {
      response.json().then((data) => {
        setProducts(data);
      });
    });
  }
  //GET PRODUCT BY TYPEID
};
export default Products;
