import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="Container">
      <h1>Hello from Dark Web App React</h1>
    </div>
  );
}

//useEffect to fetch json data
useEffect(() => {
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products/')
    const data = await res.json()

    console.log(data)
  }
  fetchProducts()
}, [])

export default App;
