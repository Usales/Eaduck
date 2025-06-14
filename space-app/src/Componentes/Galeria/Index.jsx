import styled from "styled-components"
import Tags from "./Tags/Index"
import Populares from "./Populares/Index"
import Figure from "./Figure/Index"
import { useState } from "react"

const GaleriaContainer = styled.section`
  display: flex;
  gap: 24px;
  width: 100%;
`

const SecaoFotos = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
`

const ListaFotos = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
  const [fotosFavoritas, setFotosFavoritas] = useState([]);
  const [fotoExpandida, setFotoExpandida] = useState(null);

  const aoFavoritar = (foto) => {
    if (fotosFavoritas.find(fav => fav.id === foto.id)) {
      setFotosFavoritas(fotosFavoritas.filter(fav => fav.id !== foto.id));
    } else {
      setFotosFavoritas([...fotosFavoritas, foto]);
    }
  };

  const aoExpandir = (foto) => {
    if (fotoExpandida?.id === foto.id) {
      setFotoExpandida(null);
    } else {
      setFotoExpandida(foto);
    }
  };

  return (
    <GaleriaContainer>
      <SecaoFotos>
        <Tags />
        <ListaFotos>
          {fotos.map((foto) => (
            <li key={foto.id}>
              <Figure
                $expandida={fotoExpandida?.id === foto.id}
                src={foto.path}
                alt={foto.titulo}
                titulo={foto.titulo}
                fonte={foto.fonte}
                aoFavoritar={() => aoFavoritar(foto)}
                aoExpandir={() => aoExpandir(foto)}
              />
            </li>
          ))}
        </ListaFotos>
      </SecaoFotos>
      <Populares />
    </GaleriaContainer>
  )
}

export default Galeria