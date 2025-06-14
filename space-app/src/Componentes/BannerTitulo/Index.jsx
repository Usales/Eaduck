import styled from "styled-components";

const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;
`;

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    background-position: center;
`;

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
    margin: 0;
`;

const Banner = ({ texto, backgroundImage }) => {
    return (
        <BannerContainer>
            <FigureEstilizada $backgroundImage={backgroundImage}>
                <TituloEstilizado>{texto}</TituloEstilizado>
            </FigureEstilizada>
        </BannerContainer>
    );
};

export default Banner;

