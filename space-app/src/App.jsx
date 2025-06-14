import styled from "styled-components";
import EstilosGlobais from "./Componentes/EstilosGlobais";
import Cabecalho from "./Componentes/Cabecalho/Index";
import BarraLateral from "./Componentes/BarraLateral/Index";
import Banner from "./Componentes/BannerTitulo/Index";
import Galeria from "./Componentes/Galeria/Index";

import fotos from "./fotos.json"
import { useState } from "react";
import Rodape from "./Componentes/Rodape/Index";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244F 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  padding: 0 24px;
`;

const ConteudoPrincipal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(1)
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoPrincipal>
            <Banner
              texto="Navegue pela galeria"
              backgroundImage="/imagens/banner.png"
            />
            <Galeria fotos={fotosDaGaleria}/>
          </ConteudoPrincipal>
        </MainContainer>
      </AppContainer>
      <Rodape />
    </FundoGradiente>
  );
}

export default App;
