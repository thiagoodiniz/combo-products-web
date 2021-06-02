import React from 'react';
import CardItem from './CardItem';
import { Container } from './styles';

const Cards: React.FC = () => {
    return (
        <Container>
            <CardItem />
            <CardItem />
            <CardItem />
        </Container>
    );
}

export default Cards;