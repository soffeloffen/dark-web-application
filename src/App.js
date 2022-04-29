import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import Products from './components/Products.js'
import './App.css'
import './index.css'



const App = () => {
    const [products] = useState([
        {
        id: '1',
        type: 'Drug',
        title: 'Magic Mushrooms',
        shortdescription: 'Beautiful, locally grown shrooms',
        longdescription: 'These magic mushrooms are wild, cultivated mushrooms that contain psilocybin, a naturally-occurring psychoactive and hallucinogenic compound. Psilocybin is considered one of the most well-known psychedelics, and thus of the highest quality on the Dark Web',
        onsale: false,
      },
      {
        id: '2',
        type: 'Drug',
        title: 'Cannabis sativa',
        shortdescription: 'Pure Cannabis, Common Use',
        longdescription: 'Cannabis sativa is an annual herbaceous flowering plant indigenous to Eastern Asia, but now of cosmopolitan distribution due to widespread cultivation. It is a recreational drug, which can be used for multiple sclerosis and nerve pain.',
        'onsale': false,
      },
    ])
/*
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
    }*/

         
return(
    <div className="container">
    <Navbar />
    <Products products = { products } />
    </div>
    )
}

export default App