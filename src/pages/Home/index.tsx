import React from 'react';
import Cards from './Cards';
import { Container } from './styles';
import TableContainer from './TableContainer';

const Home: React.FC = () => {
    return (
        <Container>
            <Cards />
            <TableContainer />
        </Container>
    );
}

export default Home;