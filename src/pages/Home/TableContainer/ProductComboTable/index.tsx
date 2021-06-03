import React from 'react';
import { makeStyles, Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { Container, StyledTableRow, StyledTableCell } from './styles';
import activeCombo from '../../../../assets/images/icons/active-combo.svg';
import inactiveCombo from '../../../../assets/images/icons/inactive-combo.svg';

interface IProductComboData {
    active: boolean;
    name: string;
    salesOffice: number;
    uf: string;
    segmentation: string;
    dateRange: string;
    discountDeadlinePrice: string;
}

const rows: IProductComboData[] = [
    {active: true, name: 'Combo pregos 01', salesOffice: 111224, uf: 'SP', segmentation: 'Construtora', dateRange: '01/04/2021 - 01/09/2021', discountDeadlinePrice: 'Desconto / 30%'},
    {active: true, name: 'Combo São João', salesOffice: 132569, uf: 'SP', segmentation: 'Loja de material', dateRange: '01/05/2021 - 01/08/2021', discountDeadlinePrice: 'Prazo / 30 dias'},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', segmentation: 'Construtora', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: 'Preço fixo'},
    {active: false, name: 'Venda x', salesOffice: 132569, uf: 'MG', segmentation: 'Construtora', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 60 dias'},
    {active: false, name: 'São Paulo Rio', salesOffice: 111224, uf: 'SP', segmentation: 'Construtora', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Desconto / 20%'},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', segmentation: 'Loja de material', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 50 dias'},
    {active: false, name: 'Vários produtos', salesOffice: 111224, uf: 'RJ', segmentation: 'Loja de materiaç', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Preço fixo'},
    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', segmentation: 'Construtora', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo 60 dias'},
    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', segmentation: 'Construtora', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo 60 dias'},
    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', segmentation: 'Construtora', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo 60 dias'},
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const ProductComboTable: React.FC = () => {
    const classes = useStyles();
    return (
        <Container>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell className="head" align="center">Combo</StyledTableCell>
                        <StyledTableCell className="head" align="left">Nome combo</StyledTableCell>
                        <StyledTableCell className="head" align="left">Escrit. de vendas</StyledTableCell>
                        <StyledTableCell className="head" align="left">Região</StyledTableCell>
                        <StyledTableCell className="head" align="left">Segmentação</StyledTableCell>
                        <StyledTableCell className="head" align="left">Data</StyledTableCell>
                        <StyledTableCell className="head" align="left">Desconto / Prazo / Preço fixo</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell className="body" component="th" scope="row" align="center">
                                {   row.active 
                                    ? <img src={activeCombo} alt="Active" />
                                    : <img src={inactiveCombo} alt="Inactive" />
                                }
                            </StyledTableCell>
                            <StyledTableCell className="body" align="left">{row.name}</StyledTableCell>
                            <StyledTableCell className="body" align="left">{row.salesOffice}</StyledTableCell>
                            <StyledTableCell className="body" align="left">{row.uf}</StyledTableCell>
                            <StyledTableCell className="body" align="left">{row.segmentation}</StyledTableCell>
                            <StyledTableCell className="body" align="left">{row.dateRange}</StyledTableCell>
                            <StyledTableCell className="body" align="left">{row.discountDeadlinePrice}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
}

export default ProductComboTable;