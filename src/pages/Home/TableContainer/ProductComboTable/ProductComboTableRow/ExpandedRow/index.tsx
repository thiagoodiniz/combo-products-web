import { TableCell } from '@material-ui/core';
import React from 'react';
import { ExpandedTableRow, TableCellContainer, ExpandedItemContainer, ExpandedItemTitle, ExpandedItemContent, SkuQtdContainer, VerticalDivisor, HalfVerticalDivisor } from './styles';

interface IExpandedRowProps {
    isOddRow: boolean;
}

const ExpandedRow: React.FC<IExpandedRowProps> = ({ isOddRow }) => {
    return (
        <ExpandedTableRow 
            className={isOddRow ? 'odd' : 'even'}
        >
            <TableCell />

            <TableCell colSpan={7}>
                <TableCellContainer>
                    <ExpandedItemContainer>
                        <ExpandedItemTitle>Imagem</ExpandedItemTitle>
                        <ExpandedItemContent>
                        </ExpandedItemContent>

                        <VerticalDivisor />
                    </ExpandedItemContainer>

                    <ExpandedItemContainer>
                        <ExpandedItemTitle>GPD</ExpandedItemTitle>
                        <ExpandedItemContent>
                            <span>- PREGO</span>
                            <span>- VERGALHÃO</span>
                        </ExpandedItemContent>

                        <VerticalDivisor />
                    </ExpandedItemContainer>

                    <SkuQtdContainer>
                        <ExpandedItemContainer>
                            <ExpandedItemTitle>SKU / Quant</ExpandedItemTitle>
                            <ExpandedItemContent>
                                <span>- 3263215 / 180un.</span>
                                <span>- 965463 / 250un.</span>
                                <span>- 998989 / 20un.</span>
                            </ExpandedItemContent>

                            <HalfVerticalDivisor />
                        </ExpandedItemContainer>

                        <ExpandedItemContainer>
                            <ExpandedItemTitle>&nbsp;</ExpandedItemTitle>
                            <ExpandedItemContent>
                                <span>- 669224 / 10un.</span>
                                <span>- 998922 / 20un.</span>
                                <span>- 36674 / 260un.</span>
                            </ExpandedItemContent>

                            <HalfVerticalDivisor />
                        </ExpandedItemContainer>

                        <ExpandedItemContainer>
                            <ExpandedItemTitle>&nbsp;</ExpandedItemTitle>
                            <ExpandedItemContent>
                                <span>- 326315 / 180un.</span>
                                <span>- 965463 / 250un.</span>
                                <span>- 998989 / 20 un.</span>
                            </ExpandedItemContent>
                            
                            <HalfVerticalDivisor />
                        </ExpandedItemContainer>

                        <ExpandedItemContainer>
                            <ExpandedItemTitle>&nbsp;</ExpandedItemTitle>
                            <ExpandedItemContent>
                                <span>- 669224 / 10un.</span>
                                <span>- 998922 / 20un.</span>
                                <span>- 366974 / 260un.</span>
                            </ExpandedItemContent>

                            <VerticalDivisor />
                        </ExpandedItemContainer>
                    </SkuQtdContainer>

                    <ExpandedItemContainer>
                        <ExpandedItemTitle>E-commerce</ExpandedItemTitle>
                        <ExpandedItemContent>
                            <span>- MC1</span>
                            <span>- Smartchain</span>
                            <span>- Juntos somos mais</span>
                        </ExpandedItemContent>
                    </ExpandedItemContainer>
                </TableCellContainer>
            </TableCell>

            <TableCell />

        </ExpandedTableRow>
    );
}

export default ExpandedRow;