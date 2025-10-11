import { useState, useEffect } from "react"
import axios from "axios"

import styled from "styled-components"
import CardItem from "../../components/CardItem"

import Footer from "../../components/Footer"

const Home = () => {

  const Container = styled.div`
  
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    // margin-bottom: 50px;  /* Espaço para o footer fixo */
  
  `

  const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-color: #fdfcfcff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e3e1e1;
    border-bottom: 1px solid #e3e1e1;
 

    h1{
      font-family: 'Poppins', sans-serif;
      font-size: 40px;
      margin-bottom: 10px;
    }

    p{
      font-family: 'Poppins', sans-serif;
    }
  `

  const Wrapper = styled.div`
    width: 1024px;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
      font-family: 'Poppins', sans-serif;
    }

    hr{
      margin-top: 10px;
      border: 1px solid #f3a15fff;
    }
  `

  const WrapperBox = styled.div`
    width: 100%; 
  `

  const WrapperCards = styled.div`
    width: 1024px;
    margin: 0 auto;
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;


  `

  const [produtos, setProdutos] = useState([])

  useEffect(() => {

    const fecthProdutos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/produtos")
        if(response.status === 200){
          setProdutos(response.data)
        }
      }catch(error){
        console.log("Erro ao buscar produtos:", error)
      }
    }

    fecthProdutos()

  }, [])


  return (
    <Container>
      <Banner>
        <h1>Bem-vindo ao Sabor Expresso</h1>
        <p>Descubra sabores únicos e faça seu pedido direto pelo WhatsApp!</p>
      </Banner>
      <Wrapper>
        <WrapperBox>
          <h1>Todas as nossas opções</h1>
          <hr />
        </WrapperBox>

        <WrapperCards>

          {produtos.map((item) => (
            <CardItem 
              key={item.id}
              imagem = {item.imagem_url}
              titulo = {item.titulo}
              descricao = {item.descricao}
              preco = {`R$ ${item.preco}`}
              id = {item.id}
            />
          ))}

          

        </WrapperCards>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Home