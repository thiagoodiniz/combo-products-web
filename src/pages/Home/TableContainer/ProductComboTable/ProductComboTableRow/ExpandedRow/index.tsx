import { TableCell } from '@material-ui/core';
import React from 'react';
import { ISkuQuantItem } from '../../../../../../services/ProductCombo/types';
import { ExpandedTableRow, TableCellContainer, ExpandedItemContainer, ExpandedItemTitle, ExpandedItemContent } from './styles';

interface IExpandedRowProps {
    base64FileImage: string;
    gpdSkuQuantItems: ISkuQuantItem[];
    salesPlatform: string[];
    channels: string[];
    isOddRow: boolean;
}

const ExpandedRow: React.FC<IExpandedRowProps> = ({ base64FileImage, gpdSkuQuantItems, salesPlatform, isOddRow, channels }) => {
    return (
        <ExpandedTableRow 
            className={isOddRow ? 'odd' : 'even'}
        >
            <TableCell />

            <TableCell colSpan={8}>
                <TableCellContainer>
                    {   base64FileImage &&
                        <ExpandedItemContainer>
                            <ExpandedItemTitle>Imagem</ExpandedItemTitle>
                            <ExpandedItemContent>
                                <img 
                                    src={base64FileImage}
                                    alt="product"
                                />
                            </ExpandedItemContent>

                        </ExpandedItemContainer>
                    }


                    <ExpandedItemContainer>
                        <ExpandedItemTitle>Canais</ExpandedItemTitle>
                        <ExpandedItemContent>
                            {   channels.map((channel, idx) =>
                                <span key={idx}>{`- ${channel}`}</span>
                            )}
                        </ExpandedItemContent>

                    </ExpandedItemContainer>


                    <ExpandedItemContainer className="sku-quant">
                        <ExpandedItemTitle>SKU / Quant</ExpandedItemTitle>
                        <ExpandedItemContent>
                            {   gpdSkuQuantItems.map((item, idx) =>
                                <span key={idx}>{`- ${item.sku} / ${item.quantity}`}</span>
                            )}
                        </ExpandedItemContent>
                    </ExpandedItemContainer>

                    {   salesPlatform.length > 0 &&
                        <ExpandedItemContainer className="ecommerce-container">
                            <ExpandedItemTitle>E-commerce</ExpandedItemTitle>
                            <ExpandedItemContent>
                                {   salesPlatform.map((platform, idx) => 
                                    <span key={idx}>{`- ${platform}`}</span>
                                )}
                            </ExpandedItemContent>
                        </ExpandedItemContainer>
                    }
                </TableCellContainer>
            </TableCell>

            {/* <TableCell /> */}

        </ExpandedTableRow>
    );
}

export default ExpandedRow;