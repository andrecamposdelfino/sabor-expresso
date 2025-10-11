
import { useState, useEffect} from "react";

import styled from "styled-components";

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  `
  const Card = styled.div`
    width: 600px; 
    height: 150px;
    border: 1px solid #e3e1e15d;
    margin-bottom: 10px;
    display:flex;
    align-items: center;
    margin: 10px;

    button {
      width: 100px;
      height: 30px;
      border: none;
      border-radius: 4px;
      background-color: #41403fff;
      color: white;
    }

    img {
      width: 100px;
      height: 120px;
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
    
    span {
      background-color: #313130ff;
      padding: 5px;
      border-radius: 5px;
    }
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
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    gap: 20px;

    form {
      width: 500px;
      min-height: 200px;
      border: 1px solid #e3e1e15d;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
    }

    button {
      width: 100px;
      height: 30px;
      border: none;
      border-radius: 4px;
      background-color: #41403fff;
      color: white;
    }
    
  `

  const BoxCards = styled.div`
    width: 55%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow-y: auto;
    padding-right: 10px;

  `

  const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: bold;  
      margin-bottom: 5px;
    }

    input {
      padding: 8px; 
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
  `

const Carrinho = () => {

  const [produtoCarrinho, setProdutoCarrinho] = useState([])
  const [valorTotal, setValorTotal] = useState(0)
  useEffect(() => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    setProdutoCarrinho(carrinhoAtual)   
    
    let total = 0;
    carrinhoAtual.forEach(item => {
      total += item.preco * item.quantity
    })

    setValorTotal(total.toFixed(2))
    
  }, [])

  const removeItemCarrinho = (id) => {
    const novoCarrinho = produtoCarrinho.filter(item => item.id !== id);
    setProdutoCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));

    let total = 0;
    novoCarrinho.forEach(item => {
      total += item.preco * item.quantity
    })

    setValorTotal(total.toFixed(2))
  }

  
  return (
    <>
    <Container>
      <Banner>
        <Titulo>Carrinho</Titulo>
      </Banner>
      <p>&nbsp;</p>
      <Wrapper>
        
        <BoxCards>
          {produtoCarrinho.map((item) => (
          <Card key={item.id}>
            <img src={item.imagem_url} alt="" />
            <BoxItens>
              <Titulo>{item.titulo}</Titulo>
              <p>R$ {item.preco.toFixed(2)}</p>
              <p>Quantidade: {item.quantity}</p>
              <p>Total : {(item.quantity * item.preco).toFixed(2)}</p>
              <button onClick={() => removeItemCarrinho(item.id)}>Remover</button>
            </BoxItens>
          </Card>
        
        ))}
        </BoxCards>

        <div>
          <form>
            <Titulo>Valor total do pedido <span>R$ {valorTotal}</span></Titulo>
            <Titulo>Informe seu dados para finalizar</Titulo>
            <p>&nbsp;</p>
            <FormGroup>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="endereco">Endereço:</label>
              <input type="text" id="endereco" name="endereco" required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="numero">Numero da casa:</label>
              <input type="text" id="numero" name="numero" required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="telefone" name="telefone" required />
            </FormGroup>

            <button>Finalizar</button>
            
          </form>
        </div>
      </Wrapper>
      
    </Container>
  </>
    
  )
}

export default Carrinho