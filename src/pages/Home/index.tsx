import React, { useEffect, useState } from 'react';
import { useCombosState } from '../../context/Combos';
import { isComboActive } from '../../utils';
import Cards from './Cards';
import { Container } from './styles';
import TableContainer from './TableContainer';

const Home: React.FC = () => {
    const { combosState } = useCombosState();

    const [filteredCombos, setFilteredCombos] = useState(combosState.combos || []);
    const [isFilteredByActiveCombos, setIsfilteredByActiveCombos] = useState(false);

    useEffect(() => {
        if(combosState.combos) {
            setFilteredCombos(combosState.combos);
        }
    }, [combosState.combos, setFilteredCombos]);

    const filterByActiveCombos = () => {
        if(!isFilteredByActiveCombos) {
            setIsfilteredByActiveCombos(true);
            setFilteredCombos(combosState.combos?.filter(combo => isComboActive(combo)) || []);
        } else {
            onCleanFilters();
        }
    }

    const onCleanFilters = () => {
        setIsfilteredByActiveCombos(false);
        setFilteredCombos(combosState.combos || []);
    }
   
    return (
        <Container>
            <Cards 
                combos={combosState.combos || []}
                isFilteredByActiveCombos={isFilteredByActiveCombos}
                filterByActiveCombos={combosState.combos && combosState.combos.length > 0 ? filterByActiveCombos : () => undefined}
            />

            <TableContainer 
                filteredCombos={filteredCombos}
                setFilteredCombos={setFilteredCombos}
                onCleanFilters={onCleanFilters}
            />
        </Container>
    );
}

export default Home;