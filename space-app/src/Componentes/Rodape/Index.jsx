import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const RodapeContainer = styled.footer`
    background: rgba(0, 22, 52, 0.5);
    padding: 32px;
    text-align: center;
    margin-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const TextoRodape = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    font-family: 'GandhiSansRegular', sans-serif;
    opacity: 0.8;
`;

const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 24px;
`;

const BotaoRedeSocial = styled.a`
    color: #FFFFFF;
    font-size: 28px;
    transition: all 0.3s ease;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
        color: #C98CF1;
        transform: translateY(-5px);
        opacity: 1;
    }
`;

const LinkFigma = styled.a`
    color: #FFFFFF;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'GandhiSansBold', sans-serif;
    font-size: 18px;
    opacity: 0.8;

    &:hover {
        color: #C98CF1;
        opacity: 1;
    }
`;

const Rodape = () => {
    return (
        <RodapeContainer>
            <TextoRodape>Site feito para a pratica de programação com React + Vite</TextoRodape>
            <TextoRodape style={{ marginTop: '16px' }}>
                <LinkFigma 
                    href="https://www.figma.com/design/vgNq83nBKAuwW079nWloQQ/React--arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component-%7C-SpaceApp--Community-?node-id=123-1462&t=KvqFduz2bi5EpdY3-0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Projeto Figma base
                </LinkFigma>
            </TextoRodape>
            <RedesSociais>
                <BotaoRedeSocial 
                    href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </BotaoRedeSocial>
                <BotaoRedeSocial 
                    href="https://www.instagram.com/gab_sales_salerno/following/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </BotaoRedeSocial>
                <BotaoRedeSocial 
                    href="https://github.com/Usales" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </BotaoRedeSocial>
            </RedesSociais>
        </RodapeContainer>
    );
};

export default Rodape;
