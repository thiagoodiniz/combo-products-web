import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { Container } from './styles';
import { EDiscountDeadlinePrice, IDiscountDeadlinePrice } from '../../../services/ProductCombo/types';

interface IDiscountDeadlinePriceProps {
    discountDeadlinePrice: IDiscountDeadlinePrice;
    updateDiscountDeadlinePrice(discountDeadlinePrice: IDiscountDeadlinePrice): void;
    disabled: boolean;
}

const DiscountDeadlinePrice: React.FC<IDiscountDeadlinePriceProps> = ({ discountDeadlinePrice, updateDiscountDeadlinePrice, disabled }) => {
    return (
        <Container>
            <TextField
                select
                className="options"
                value={discountDeadlinePrice.type}
                onChange={(e: any) => {
                    updateDiscountDeadlinePrice({ type: e.target.value as EDiscountDeadlinePrice, description: '' });
                }}
                disabled={disabled}
            >
                {Object.values(EDiscountDeadlinePrice).map((option) =>
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                )}
            </TextField>
            
            {   discountDeadlinePrice.type !== EDiscountDeadlinePrice.FIXPRICE &&
                <TextField
                    className="description"
                    error={false}
                    value={discountDeadlinePrice.description}
                    onChange={(e: any) => updateDiscountDeadlinePrice({ ...discountDeadlinePrice, description: e.target.value })}
                    InputProps={{
                        type:"number",
                        endAdornment: discountDeadlinePrice.type === EDiscountDeadlinePrice.DISCOUNT 
                            ? '%'
                            : discountDeadlinePrice.type === EDiscountDeadlinePrice.DEADLINE
                                ? 'dias'
                                : '-'
                    }}
                    disabled={disabled}
                />
            }
        </Container>
    );
}

export default DiscountDeadlinePrice;