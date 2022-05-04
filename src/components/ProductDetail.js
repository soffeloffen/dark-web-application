import {useParams} from "react-router-dom"
import productsData from "../productsData"
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
        
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>

        </div>
    )
}

export default ProductDetail