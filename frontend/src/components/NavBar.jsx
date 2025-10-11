import { NavLink } from "react-router-dom"
import styled from "styled-components"

const NavBar = () => {

    const Container = styled.div`
        width: 100%;
        height: 80px;
        background-color: #fcfbfbff;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            text-decoration: none;
            font-size: 20px;
            margin: 0 15px;
            font-family: 'Poppins', sans-serif;
            transition: 0.3s;
            padding: 10px;
            color: #000000;
        }

        a:hover {
            background-color: #f0eaea;
            transition: 0.3s;
            padding: 10px;
            border-radius: 5px;
        }
    `


    return (
        <Container>
            <NavLink to="/">Todos</NavLink>
            <NavLink to="/pasteis">Pasteis</NavLink>
            <NavLink to="/pizzas">Pizzas</NavLink>
            <NavLink to="/esfirras">Esfirras</NavLink>
            <NavLink to="/bebidas">Bebidas</NavLink>
        </Container>
    )
}

export default NavBar