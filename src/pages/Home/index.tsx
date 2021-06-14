import React from 'react';
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
            
            <Cards 
                combos={combos}
                loading={loading}
                error={error}
            />

            <TableContainer 
                combos={combos}
                loading={loading}
                error={error}
            />
        </Container>
    );
}

export default Home;