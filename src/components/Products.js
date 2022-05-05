import { Link } from "react-router-dom";

//take the products array from App.js and convert to lsit of products
//return to Product.js
const Products = ({ allproducts }) => {

const products = allproducts.map((product) => {
    return (
        <div key={product.id}>
          <div>
          <Link to={`/products/${product.id}`}>{<img className="image" src={product.image} />}</Link>
          </div>
          <h3>{product.title}</h3>
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