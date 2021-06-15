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
}

const TableContainer: React.FC<ITableContainerProps> = ({ combos, loading, error, removeCombo }) => {
    return (
        <Container>
            <TableFilter />
            <ProductComboTable
                combos={combos}
                loading={loading}
                error={error}
                removeCombo={removeCombo}
            />
        </Container>
    );
}

export default TableContainer;