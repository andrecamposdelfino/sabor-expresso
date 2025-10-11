import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

const Detalhe = () => {

    const { id } = useParams();
    const [produto, setProduto] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fecthProduto = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/produtos/${id}`);
                if (response.status === 200) {
                    setProduto(response.data)
                }

            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        }

        fecthProduto()
    }, [id])

    const Container = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
        padding: 20px;
        background-color: #f5f5f5;
    `
    const Titulo = styled.h1`
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
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
    const ContainerDetalhe = styled.div`
        width: 100%;
        max-width: 1024px;
        display: flex;
        margin-top: 20px;
        gap: 20px;
    `
    const WrapperItens = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            font-weight: bold;       
        }

        p {
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            font-weight: bold;       
        }

        span {
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: bold;       
        }

        button {
            width: 100px;
            height: 30px;
        }

        input {
            width: 100px;
            height: 30px;
            padding: 5px;
        }
    `

    const handleSaveLocalStorage = () => {
        const produto2 = {
            id: produto.id,
            titulo: produto.titulo,
            preco: parseFloat(produto.preco),
            imagem_url: produto.imagem_url,
            quantity: quantity
        }

        const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
        const novoCarrinho = [...carrinhoAtual, produto2];
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  
    }

    return (
        <Container>
            
            <Banner>
                <Titulo>Detalhe</Titulo>
            </Banner>

            <ContainerDetalhe>
                <div>                    
                    <img src={produto.imagem_url} alt="" />
                </div>
                <WrapperItens>
                    <h2>{produto.titulo}</h2>
                    <p>{produto.descricao}</p>
                    <span>{`R$ ${produto.preco}`}</span>                   
                    <input 
                    type="number" 
                    name="quantidade"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <button onClick={handleSaveLocalStorage}>Add Carrinho</button>
                </WrapperItens>
            </ContainerDetalhe>

        </Container>
    )
}

export default Detalhe