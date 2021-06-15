import React, { useState } from 'react';
import { makeStyles, Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { Container, TableContainer, StyledTableCell } from './styles';
import ProductComboTableRow from './ProductComboTableRow';
import ProductTableFooter from './ProductTableFooter';
import { IProductComboData } from '../../../../services/ProductCombo/types';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    table: {
        minWidth: 1000,
    },
    loading: {
        width: '100%',
        padding: '1rem 0.5rem'
    }
});

interface IProductComboTableProps {
    combos: IProductComboData[];
    loading: boolean;
    error: boolean;
    removeCombo(comboId: string): void;
}

const ProductComboTable: React.FC<IProductComboTableProps> = ({ combos, loading, error, removeCombo }) => {
    const classes = useStyles();
    const [selectedPage, setSelectedPage] = useState(1);
    const [rowsPerPage] = React.useState(8);

    return (
        <Container>

            {   !loading && !error && combos.length > 0 &&
                <>
                    <TableContainer>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell className="head expand" align="center">Expandir</StyledTableCell>
                                    <StyledTableCell className="head" align="center">Combo</StyledTableCell>
                                    <StyledTableCell className="head" align="left">Nome combo</StyledTableCell>
                                    <StyledTableCell className="head" align="left">Escrit. de vendas</StyledTableCell>
                                    <StyledTableCell className="head" align="center">Região</StyledTableCell>
                                    <StyledTableCell className="head" align="left">Canal</StyledTableCell>
                                    <StyledTableCell className="head" align="left">Data</StyledTableCell>
                                    <StyledTableCell className="head" align="left">Desconto / Prazo / Preço fixo</StyledTableCell>
                                    <StyledTableCell className="head actions" align="left"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {combos
                                    .filter((_, idx) => (idx+1) <= (rowsPerPage*selectedPage) && (idx+1) > (rowsPerPage*(selectedPage-1)))
                                    .map((row, idx) => (
                                    <ProductComboTableRow
                                        key={idx}
                                        rowData={row}
                                        isOddRow={(idx % 2 === 1)}
                                        removeCombo={removeCombo}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    {   combos.length > rowsPerPage &&
                        <ProductTableFooter 
                            totalRows={combos.length}
                            rowsPerPage={rowsPerPage}
                            setSelectedPage={setSelectedPage}
                        />
                    }
                </>
            }

            {   loading && 
                <div className={classes.loading}>
                    <Skeleton animation="pulse" height={30}/>
                    <Skeleton animation="pulse" height={30}/>
                    <Skeleton animation="pulse" height={30}/>
                    <Skeleton animation="pulse" height={30}/>
                    <Skeleton animation="pulse" height={30}/>
                    <Skeleton animation="pulse" height={30}/>
                    <Skeleton animation="pulse" height={30}/>
                    <Skeleton animation="pulse" height={30}/>
                    <Skeleton animation="pulse" height={30}/>
                </div>
            }

            {   error &&
                <span className="error">Falha ao carregar os combos. <br/>Por favor, tente novamente mais tarde. </span>
            }

        </Container>
    );
}

export default ProductComboTable;