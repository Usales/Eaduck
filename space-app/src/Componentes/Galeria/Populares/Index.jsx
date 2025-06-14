import styled from 'styled-components';
import Titulo from "../../Titulo/Index"

const PopularesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 230px;
`;

const ImagemPopular = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const Populares = () =>{
    const fotosPopulares = [
        {
            id: 1,
            titulo: "Foto 1",
            path: "/imagens/populares/foto-1.png"
        },
        {
            id: 2,
            titulo: "Foto 2",
            path: "/imagens/populares/foto-2.png"
        },
        {
            id: 3,
            titulo: "Foto 3",
            path: "/imagens/populares/foto-3.png"
        },
        {
            id: 4,
            titulo: "Foto 4",
            path: "/imagens/populares/foto-4.png"
        },
        {
            id: 5,
            titulo: "Foto 5",
            path: "/imagens/populares/foto-5.png"
        }
    ];

    return(
        <PopularesContainer>
            <Titulo $alinhamento="center">Populares</Titulo>
            {fotosPopulares.map(foto => (
                <ImagemPopular 
                    key={foto.id}
                    src={foto.path}
                    alt={foto.titulo}
                />
            ))}
        </PopularesContainer>
    )
}

export default Populares