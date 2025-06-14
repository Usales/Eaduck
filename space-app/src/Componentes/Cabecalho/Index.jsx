import styled from "styled-components"
import logo from "/imagens/logo.png"
import CampoTexto from "../CampoTexto/Index.jsx"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;

    }
`

const Cabecalho = () =>{
    return(
    <HeaderEstilizado>
        <img src={logo} alt='Logo' />
        <CampoTexto />
    </HeaderEstilizado>
    )
}

export default Cabecalho