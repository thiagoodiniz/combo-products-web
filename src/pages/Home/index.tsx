import React from 'react';
import { IProductComboData } from '../../services/ProductCombo/types';
import Cards from './Cards';
import { Container } from './styles';
import TableContainer from './TableContainer';

interface IHomeProps {
    combos: IProductComboData[];
    loading: boolean;
    error: boolean;
    removeCombo(comboId: string): void;
}

const Home: React.FC<IHomeProps> = ({ combos, loading, error, removeCombo }) => {
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
                removeCombo={removeCombo}
            />
        </Container>
    );
}

export default Home;