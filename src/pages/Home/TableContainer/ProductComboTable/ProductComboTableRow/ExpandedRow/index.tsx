import { TableCell } from '@material-ui/core';
import React from 'react';
import { gpds, IGpdSkuQuantItem } from '../../../../../../services/ProductCombo/types';
import { ExpandedTableRow, TableCellContainer, ExpandedItemContainer, ExpandedItemTitle, ExpandedItemContent } from './styles';

interface IExpandedRowProps {
    gpdSkuQuantItems: IGpdSkuQuantItem[];
    isOddRow: boolean;
}

const getGPDLabel = (id: string): string => {
    return gpds.find(gpd => gpd.id === id)?.label || '';
}

const getSelectedGPDs = (gpdSkuQuantItems: IGpdSkuQuantItem[]): string[] => {
    const noRepeatIds: string[] = [];
    gpdSkuQuantItems.forEach(item => {
        if(!noRepeatIds.includes(item.gpd)){
            noRepeatIds.push(item.gpd);
        }
    });

    return noRepeatIds.map(item => getGPDLabel(item));
}

const ExpandedRow: React.FC<IExpandedRowProps> = ({ gpdSkuQuantItems, isOddRow }) => {
    const selectedGPDs = getSelectedGPDs(gpdSkuQuantItems);

    return (
        <ExpandedTableRow 
            className={isOddRow ? 'odd' : 'even'}
        >
            <TableCell />

            <TableCell colSpan={8}>
                <TableCellContainer>
                    <ExpandedItemContainer>
                        <ExpandedItemTitle>Imagem</ExpandedItemTitle>
                        <ExpandedItemContent>
                            <img 
                                src="https://coresvivashomecenter.fbitsstatic.net/img/p/prego-com-cabeca-19x30-1kg-gerdau-90275/276841.jpg" 
                                alt="product"
                            />
                        </ExpandedItemContent>

                    </ExpandedItemContainer>

                    <ExpandedItemContainer>
                        <ExpandedItemTitle>GPD</ExpandedItemTitle>
                        <ExpandedItemContent>
                            {   selectedGPDs.map((item, idx) =>
                                <span key={idx}>{`- ${item}`}</span>
                            )}
                        </ExpandedItemContent>

                    </ExpandedItemContainer>

                    <ExpandedItemContainer>
                        <ExpandedItemTitle>SKU / Quant</ExpandedItemTitle>
                        <ExpandedItemContent>
                            {   gpdSkuQuantItems.map((item, idx) =>
                                <span key={idx}>{`- ${item.sku} / ${item.quantity}`}</span>
                            )}
                        </ExpandedItemContent>
                    </ExpandedItemContainer>

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

            {/* <TableCell /> */}

        </ExpandedTableRow>
    );
}

export default ExpandedRow;