import React, { useEffect, useState } from 'react';
import { IProductComboData } from '../../services/ProductCombo/types';
import { isComboActive } from '../../utils';
import Cards from './Cards';
import { Container } from './styles';
import TableContainer from './TableContainer';

interface IHomeProps {
    combos: IProductComboData[];
    loading: boolean;
    error: boolean;
    removeCombo(comboId: string): void;
    duplicateCombo(combo: IProductComboData): void;
}

const Home: React.FC<IHomeProps> = ({ combos, loading, error, removeCombo, duplicateCombo }) => {
    const [filteredCombos, setFilteredCombos] = useState(combos);
    const [isFilteredByActiveCombos, setIsfilteredByActiveCombos] = useState(false);

    useEffect(() => {
        if(combos) {
            setFilteredCombos(combos);
        }
    }, [combos, setFilteredCombos]);

    const filterByActiveCombos = () => {
        if(!isFilteredByActiveCombos) {
            setIsfilteredByActiveCombos(true);
            setFilteredCombos(combos.filter(combo => isComboActive(combo)));
        } else {
            onCleanFilters();
        }
    }

    const onCleanFilters = () => {
        setIsfilteredByActiveCombos(false);
        setFilteredCombos(combos);
    }
   
    return (
        <Container>
            
            <Cards 
                combos={combos}
                loading={loading}
                error={error}
                isFilteredByActiveCombos={isFilteredByActiveCombos}
                filterByActiveCombos={combos.length > 0 ? filterByActiveCombos : ()=>undefined}
            />

            <TableContainer 
                combos={combos}
                filteredCombos={filteredCombos}
                setFilteredCombos={setFilteredCombos}
                onCleanFilters={onCleanFilters}
                loading={loading}
                error={error}
                removeCombo={removeCombo}
                duplicateCombo={duplicateCombo}
            />
        </Container>
    );
}

export default Home;