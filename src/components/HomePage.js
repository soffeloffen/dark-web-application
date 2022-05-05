import { Link } from "react-router-dom";

//take the products array from App.js and convert to lsit of products
const ProductsOnSale = ({ allproducts }) => {
const products = allproducts.map((product) => {

//A div to show title and image - with link to product detail page for that prod id
const ProdOnSaleDiv =  <div>
    <h3>{product.title}</h3>
        <div>
        <Link to={`/products/${product.id}`}>{<img className="image" src={product.image} className='cat' />}</Link>
     </div>   
</div>
    
//return ProdOnSaleDiv if that product's onsale attribute ==true
        return (
            <div key={product.id}>
              <b>{product.onsale==true? ProdOnSaleDiv :""}</b>
            </div>
      );
    });
    
//return to the page, the welcome title and the list of products (which here is only products onsale)
return (
            <>
              <h1>Welcome to the Dark Web!</h1>
              <h3>Products On Sale !!</h3>
              {products} 
            </>
          );
    };
        

export default ProductsOnSale
