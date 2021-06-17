import React from 'react';
import { IProductComboData } from '../../../services/ProductCombo/types';
import ProductComboTable from './ProductComboTable';
import { Container } from './styles';
import TableFilter from './TableFilter';

interface ITableContainerProps {
    combos: IProductComboData[];
    loading: boolean;
    error: boolean;
    removeCombo(comboId: string): void;
    duplicateCombo(combo: IProductComboData): void;

    filteredCombos: IProductComboData[];
    setFilteredCombos(combos:IProductComboData[]): void;
    onCleanFilters(): void
}

const TableContainer: React.FC<ITableContainerProps> = ({ combos, loading, error, removeCombo, duplicateCombo, filteredCombos, setFilteredCombos, onCleanFilters }) => {
    return (
        <Container>
            <TableFilter 
                onCleanFilters={onCleanFilters}
                combos={combos || []}
                setFilteredCombos={setFilteredCombos}
                isFiltered={filteredCombos?.length !== combos.length}
            />

            <ProductComboTable
                combos={filteredCombos || []}
                loading={loading}
                error={error}
                removeCombo={removeCombo}
                duplicateCombo={duplicateCombo}
            />
        </Container>
    );
}

export default TableContainer;