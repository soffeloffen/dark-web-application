import {useParams} from "react-router-dom"
import ButtonAddToBasket from './ButtonAddToBasket'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductDetail() {
    const {productId} = useParams()
    const [product, setProduct] = useState({id: {}})
    

//make the API call to server
useEffect(() => {
    const getProduct = async () => {
    const productFromServer = await fetchProduct()
    setProduct(productFromServer)}
    getProduct()
}, [])

//fetch product with given productId
const fetchProduct = async () => {
    const res = await fetch(`http://localhost:3000/products/${productId}`)
    const data = await res.json()
    
    //return data[0] because the API call returns a list with one element at place 0
    return data[0]
}

//return the look and date of the product details for that product
    return (
        
        <div>
            <button><Link to="/products">Go Back To All Products</Link></button>
            <h2>{product.title}</h2>
            <img  className='image2'  src={"/"+product.image}/>
            <h4>Price: {product.price} $ {product.currency} - {product.quantity} {product.measurement} </h4>
             <ButtonAddToBasket product = {product} /> 
            <p>{product.longdescription}</p>
        </div>
    )
}

export default ProductDetail