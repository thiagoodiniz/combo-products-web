import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { Container } from './styles';
import { EDiscountDeadlinePrice, IDiscountDeadlinePrice } from '../../../services/ProductCombo/types';

interface IOption {
    label: string;
    option: EDiscountDeadlinePrice;
}

const options: IOption[] = [
    { option: EDiscountDeadlinePrice.DISCOUNT, label: 'Desconto' },
    { option: EDiscountDeadlinePrice.DEADLINE, label: 'Prazo' },
    { option: EDiscountDeadlinePrice.FIXPRICE, label: 'Preço fixo' },
];

interface IDiscountDeadlinePriceProps {
    discountDeadlinePrice: IDiscountDeadlinePrice;
    updateDiscountDeadlinePrice(discountDeadlinePrice: IDiscountDeadlinePrice): void;
}

const DiscountDeadlinePrice: React.FC<IDiscountDeadlinePriceProps> = ({ discountDeadlinePrice, updateDiscountDeadlinePrice }) => {
    return (
        <Container>
            <TextField
                select
                className="options"
                value={discountDeadlinePrice.type}
                onChange={(e: any) => {
                    updateDiscountDeadlinePrice({ type: e.target.value as EDiscountDeadlinePrice, description: '' });
                }}
            >
                {options.map((option) =>
                    <MenuItem key={option.option} value={option.option}>
                        {option.label}
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
                />
            }
        </Container>
    );
}

export default DiscountDeadlinePrice;