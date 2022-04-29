import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import Products from './components/Products.js'
import './App.css'


const App = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()
        }
        getProducts()
    }, [])

    //fetch products
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        console.log(data)
        return data
    }

         
return(
    <div className="App">
    <Navbar />
    <Products products = { products } />
    <h2> hey from app.js</h2>
    </div>
    )
}

export default App