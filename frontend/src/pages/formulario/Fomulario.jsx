import styled from "styled-components"

const Container = styled.div`
    width: 1024px;
    height: 600px;
    margin: 0 auto;

    button {
      width: 150px;
      height:40px;
      border:none;
      border-radius:5px;
      background-color:black;
      color:white;
      cursor:pointer;
    }
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
const handleSubmit = (e) => {
  e.preventDefault()
  alert(`CUPON\nNome: ${e.target.nome.value}\nEndereço: ${e.target.endereco.value}`)
}

const Fomulario = () => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>

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

    </Container>
  )
}

export default Fomulario