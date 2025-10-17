import { NavLink } from "react-router-dom"
import styled from "styled-components"
const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: #282c34;
    color: white;
    margin-bottom: 0;
    left: 0;
    bottom: 0;
    position:fixed;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    a{
      margin-right:20px;
      color:white;
      text-decoration:none;
      font-family:arial;
      background-color: #fa8517ff;
      padding:10px;
      border-radius:5px;
    }

    span {
      margin-left:20px;
      color:white;
      text-decoration:none;
      font-family:arial;
      background-color: #fa8517ff;
      padding:10px;
      border-radius:5px;
    }
    
  `

const Footer = ({valorTotal}) => {

  return (
    <Container>
      <span>Valor total: R$ {valorTotal}</span>
      <NavLink to="/formulario">Avançar</NavLink>
    </Container>
  )
}

export default Footer