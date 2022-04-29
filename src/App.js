//import {useState, useEffect} from 'react'
import ProductInfo from './components/ProductInfo'
import ButtonAddToBasket from './components/ButtonAddToBasket'


const App = () => {
return(
    <div className='container'>
    <ProductInfo />
    <ButtonAddToBasket />

    </div>
)

/*
  useEffect(() => {
    const getTasks = async() =>{
        const productsFromServer = await fetchProducts()
        setProducts(productsFromServer)
    }

    getProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:3000/products/')
    const data = await res.json()

return data
}*/
}
export default App
