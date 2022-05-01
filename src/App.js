import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import Products from './components/Products.js'
import './App.css'
import './product.css'


const App = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()
            setProducts(productsFromServer)
        }
        getProducts()
    }, [])

    //fetch products
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        console.log(data)

        return data.products
    }
         
return(
    <div className="App">
    <Navbar />
    <Products products = { products } />
    </div>
    )

}

export default App
