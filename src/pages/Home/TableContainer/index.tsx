import React from 'react';
import { IProductComboData } from '../../../services/ProductCombo/types';
import ProductComboTable from './ProductComboTable';
import { Container } from './styles';
import TableFilter from './TableFilter';

interface ITableContainerProps {
    combos: IProductComboData[];
    loading: boolean;
    error: boolean;
}

const TableContainer: React.FC<ITableContainerProps> = ({ combos, loading, error }) => {
    return (
        <Container>
            <TableFilter />
            <ProductComboTable
                combos={combos}
                loading={loading}
                error={error}
            />
        </Container>
    );
}

export default TableContainer;