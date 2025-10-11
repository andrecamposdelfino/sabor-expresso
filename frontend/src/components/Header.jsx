import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Header = () => {

    const Header = styled.div`
        width: 100%;
        height: 60px;
        background-color: #fa8517ff;
        display: flex;
        justify-content:space-between;
        align-items: center;
        color: white;
    `

    const HeaderWrapper = styled.div`
        width:1024px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1{
            font-family: 'Poppins', sans-serif;
        }
    `

    const HeaderDiv = styled.div`
        width: 200px;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;

        a{
            font-family: 'Poppins', sans-serif;
            text-decoration: none;
            color: white;
        }


        button{
            width: 180px;
            height: 40px;
            background-color: #111111ff;
            color: #e8e9ebff;
            border-radius: 5px;
            cursor: pointer;
            border: none;
            padding: 5px;
        }
    `
    
  return (
    <Header>
        <HeaderWrapper>
            <h1>Sabor Expresso</h1>
            <HeaderDiv>
                <NavLink to="/carrinho">Carrinho</NavLink>               
                <button>
                    <NavLink to="/formularioentrega">Dados para entrega</NavLink>
                </button>
            </HeaderDiv>
        </HeaderWrapper>
    </Header>
  )
}

export default Header