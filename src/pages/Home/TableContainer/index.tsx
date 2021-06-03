import React from 'react';
import ProductComboTable from './ProductComboTable';
import { Container } from './styles';
import TableFilter from './TableFilter';

const TableContainer: React.FC = () => {
    return (
        <Container>
            <TableFilter />
            <ProductComboTable />
        </Container>
    );
}

export default TableContainer;