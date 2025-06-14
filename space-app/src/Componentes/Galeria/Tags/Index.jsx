import styled from 'styled-components';
import tags from './tags.json';

const TagTituloEstilizado = styled.div`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 24px;
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;

    &:hover {
        border-color: #C98CF1;
        transform: translateY(-5px);
    }
`;

const Tags = () => { 
    return (
        <TagTituloEstilizado>
            <p>Busque por tags:</p>
            <TagsContainer>
                {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
            </TagsContainer>
        </TagTituloEstilizado>
    );
};

export default Tags;