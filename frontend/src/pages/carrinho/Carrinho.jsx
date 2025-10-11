
import { useState, useEffect} from "react";

import styled from "styled-components";

const Carrinho = () => {

  const [produtoCarrinho, setProdutoCarrinho] = useState([])
  const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
  useEffect(() => {
    setProdutoCarrinho(carrinhoAtual)    
  }, [])

  const removeItemCarrinho = (id) => {
    const novoCarrinho = produtoCarrinho.filter(item => item.id !== id);
    setProdutoCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  }

  

  
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    padding: 20px;
  `
  const Card = styled.div`
    width: 1200px; 
    height: 150px;
    border: 1px solid #e3e1e15d;
    margin-bottom: 10px;
    display:flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin: 10px;
      border-radius: 8px;
    }
  `
  const Titulo = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fa8517ff;   
  `
  const Banner = styled.div`
    width: 100%; 
    height: 100px;
    border: 1px solid #e3e1e15d;
    background:  linear-gradient(90deg, rgba(39, 38, 36, 1) 0%, rgba(70, 68, 68, 1) 100%);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const BoxItens = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 3px;

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: bold;       
    }
  `

  return (
    <Container>
      <Banner>
        <Titulo>Carrinho</Titulo>
      </Banner>
      <p>&nbsp;</p>
      {produtoCarrinho.map((item) => (
        <Card key={item.id}>
          <img src={item.imagem_url} alt="" />
          <BoxItens>
            <Titulo>{item.titulo}</Titulo>
            <p>R$ {item.preco.toFixed(2)}</p>
            <p>Quantidade: {item.quantity}</p>
            <p>Total : {(item.quantity * item.preco).toFixed(2)}</p>
          </BoxItens>
        </Card>
      ))}
      
    </Container>

    
  )
}

export default Carrinho