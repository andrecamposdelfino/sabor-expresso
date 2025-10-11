import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Pasteis from "./pages/pasteis/Pasteis"
import Pizzas from "./pages/pizzas/Pizzas"
import Esfirras from "./pages/esfirras/Esfirras"
import Bebidas from "./pages/bebidas/Bebidas" 
import Carrinho from "./pages/carrinho/Carrinho"
import FormularioEntrega from "./pages/formularioentrega/FormularioEntrega"

import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Detalhe from "./pages/detalhe/Detalhe"


function App() {
  

  return (
    <BrowserRouter>
     <Header />
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pasteis" element={<Pasteis />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/esfirras" element={<Esfirras />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/detalhe/:id" element={<Detalhe />} />
        <Route path="/formularioentrega" element={<FormularioEntrega />} />
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
