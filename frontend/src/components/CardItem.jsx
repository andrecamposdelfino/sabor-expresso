import { NavLink} from "react-router-dom"
import styled from "styled-components"

const CardItem = ({ imagem, titulo, descricao, preco, id }) => {

    const Card = styled.div`
        width: 300px;
        height: 400px;
        background-color: #ffffff;
        border: 1px solid #e3e1e1;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 10px;
        margin-top: 20px;

        transition: transform 0.3s ease;

        &:hover {   
            transform: translateY(-10px);
        }

        p{
            font-family: 'Poppins', sans-serif;
            font-size: 15px; 
            margin-top: 10px;
        }
        
    `
    const BoxSeparador = styled.div`
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            font-weight: bold;
        }

        button{
            width: 80px;
            height: 40px;
            background-color: #f8f8f8ff;
            color: #282c34;
            border-radius: 5px;
            border:none;
            cursor: pointer;
        }

    `

    const CardImagem = styled.div`
        width: 100%;    
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        

        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }
    `

    const Titulo = styled.h1`
        font-family: 'Poppins', sans-serif;
        font-size: 20px; 
        margin-top: 20px;
    `

    // const navigate = useNavigate();

    return (
        <Card>
            <CardImagem>
                <img src={imagem} alt="" srcset="" />
            </CardImagem>
            <Titulo>{titulo}</Titulo>
            <p>{descricao}</p>
            <BoxSeparador>
                <span>{preco}</span>
                <button>
                    <NavLink to={`/detalhe/${id}`} style={{ textDecoration: 'none', color: '#282c34' }}>Detalhes</NavLink>
                </button>
            </BoxSeparador>
        </Card>
    )
}

export default CardItem