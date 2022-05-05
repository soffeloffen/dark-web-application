import {useParams} from "react-router-dom"
import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
import { useState, useEffect } from "react";


function ProductDetail() {
    const {productId} = useParams()
    const [product, setProduct] = useState({id: {}})


useEffect(() => {
    const getProduct = async () => {
    const productFromServer = await fetchProduct()
    setProduct(productFromServer)}
    getProduct()
}, [])

const fetchProduct = async () => {
    const res = await fetch(`http://localhost:3000/products/${productId}`)
    const data = await res.json()
    console.log(product)
    console.log(data)
    return data[0]
}

    return (
        <div>
            <h2>{product.title}</h2>
            <img  className='image2'  src={"/"+product.image}/>
            <p>Price: {product.price}</p>
            <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
            <p>{product.longdescription}</p>
        </div>
    )
}

export default ProductDetail