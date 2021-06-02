import React from 'react';
import { Container } from './styles';

const CardItem: React.FC = () => {
    return (
        <Container>
            <div className="icon-box">
                ícone
            </div>
            <div className="card-content">
                conteúdo
            </div>
        </Container>
    );
}

export default CardItem;