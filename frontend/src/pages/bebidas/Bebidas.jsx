import styled from "styled-components"
import CardItem from "../../components/CardItem"
import Footer from "../../components/Footer"

const Container = styled.div`
  
    width: 100%;
    height: 100vh;
  
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

const Bebidas = () => {

  

  return (
    <Container>
      <Banner>
        <h1>Bem-vindo ao Sabor Expresso</h1>
        <p>Descubra sabores únicos e faça seu pedido direto pelo WhatsApp!</p>
      </Banner>
      <Wrapper>
        <WrapperBox>
          <h1>Bebidas</h1>
          <hr />
        </WrapperBox>

        <WrapperCards>

          <CardItem 
            imagem = "https://imgs.search.brave.com/VLh_dAVYcY6Hk_WiLeIkyMNJGuFrdb3bPcxviMxDOzA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L3BpenphLW1hcmd1/ZXJpdGEtNzMweDQ4/MC5qcGVn"
            titulo = "Pizza Calabresa"
            descricao = "Deliciosa pizza de calabresa com queijo derretido, molho especial e massa crocante."
            preco = "R$ 29,90"
          />

          <CardItem 
            imagem = "https://imgs.search.brave.com/VLh_dAVYcY6Hk_WiLeIkyMNJGuFrdb3bPcxviMxDOzA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L3BpenphLW1hcmd1/ZXJpdGEtNzMweDQ4/MC5qcGVn"
            titulo = "Pizza Calabresa"
            descricao = "Deliciosa pizza de calabresa com queijo derretido, molho especial e massa crocante."
            preco = "R$ 29,90"
          />

          <CardItem 
            imagem = "https://imgs.search.brave.com/VLh_dAVYcY6Hk_WiLeIkyMNJGuFrdb3bPcxviMxDOzA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L3BpenphLW1hcmd1/ZXJpdGEtNzMweDQ4/MC5qcGVn"
            titulo = "Pizza Calabresa"
            descricao = "Deliciosa pizza de calabresa com queijo derretido, molho especial e massa crocante."
            preco = "R$ 29,90"
          />

          <CardItem 
            imagem = "https://imgs.search.brave.com/VLh_dAVYcY6Hk_WiLeIkyMNJGuFrdb3bPcxviMxDOzA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L3BpenphLW1hcmd1/ZXJpdGEtNzMweDQ4/MC5qcGVn"
            titulo = "Pizza Calabresa"
            descricao = "Deliciosa pizza de calabresa com queijo derretido, molho especial e massa crocante."
            preco = "R$ 29,90"
          />

        </WrapperCards>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Bebidas