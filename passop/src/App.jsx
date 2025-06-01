import { useState } from 'react'
import './App.css'
import Manager from './assets/Componets/Manager'
import Navbar from './assets/Componets/Navbar' 
import Footer from './assets/Componets/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    
    <Manager />

    <Footer />
    </>
  )
}

export default App
