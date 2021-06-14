import React, { useState } from 'react';
import { ProductComboService } from '../../services/ProductCombo';
import { IProductComboData } from '../../services/ProductCombo/types';
import Cards from './Cards';
import { Container } from './styles';
import TableContainer from './TableContainer';

interface IHomeProps {
    combos: IProductComboData[];
    loading: boolean;
    error: boolean;
}

const Home: React.FC<IHomeProps> = ({ combos, loading, error }) => {
    return (
        <Container>
            <Cards />
            <TableContainer 
                combos={combos}
                loading={loading}
                error={error}
            />
        </Container>
    );
}

export default Home;