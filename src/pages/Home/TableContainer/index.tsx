import React from 'react';
import { useCombosState } from '../../../context/Combos';
import { IProductComboData } from '../../../context/Combos/types';
import ProductComboTable from './ProductComboTable';
import { Container } from './styles';
import TableFilter from './TableFilter';

interface ITableContainerProps {
    filteredCombos: IProductComboData[];
    setFilteredCombos(combos:IProductComboData[]): void;
    onCleanFilters(): void
}

const TableContainer: React.FC<ITableContainerProps> = ({ filteredCombos, setFilteredCombos, onCleanFilters }) => {
    const { combosState } = useCombosState();
    
    return (
        <Container>
            <TableFilter 
                onCleanFilters={onCleanFilters}
                combos={combosState.combos || []}
                setFilteredCombos={setFilteredCombos}
                isFiltered={filteredCombos?.length !== combosState.combos?.length}
            />

            <ProductComboTable
                combos={filteredCombos || []}
                loading={combosState.loading}
                error={combosState.error}
            />
        </Container>
    );
}

export default TableContainer;