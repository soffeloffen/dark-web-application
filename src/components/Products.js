import Product from './Product'
import { Link } from "react-router-dom";

//take the products array from App.js and convert to lsit of products
//return to Product.js
const Products = ({ allproducts }) => {

const products = allproducts.map((product) => {
        return (
          <div key={product.id}>
            <h3>
            <Link to={`/Products/${product.id}`}>{product.title}</Link>
            </h3>
            <p>Price: ${product.price}</p>
          </div>
        );
      });
    
      return (
        <>
          <h1>Products Page</h1>
          {products}
        </>
      );
    };
    
export default Products
