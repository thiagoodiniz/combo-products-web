import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { Container } from './styles';

export enum EDiscountDeadlinePrice {
    DISCOUNT = "DISCOUNT",
    DEADLINE = "DEADLINE",
    FIXPRICE = "FIXPRICE"
}

interface IOption {
    label: string;
    option: EDiscountDeadlinePrice;
}

const options: IOption[] = [
    { option: EDiscountDeadlinePrice.DISCOUNT, label: 'Desconto' },
    { option: EDiscountDeadlinePrice.DEADLINE, label: 'Prazo' },
    { option: EDiscountDeadlinePrice.FIXPRICE, label: 'Preço fixo' },
];

export interface IDiscountDeadlinePrice {
    selectedOption: EDiscountDeadlinePrice;
    description: string;
}
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
                value={discountDeadlinePrice.selectedOption}
                onChange={(e: any) => {
                    updateDiscountDeadlinePrice({ selectedOption: e.target.value as EDiscountDeadlinePrice, description: '' });
                }}
            >
                {options.map((option) =>
                    <MenuItem key={option.option} value={option.option}>
                        {option.label}
                    </MenuItem>
                )}
            </TextField>
            
            {   discountDeadlinePrice.selectedOption !== EDiscountDeadlinePrice.FIXPRICE &&
                <TextField
                    className="description"
                    error={false}
                    value={discountDeadlinePrice.description}
                    onChange={(e: any) => updateDiscountDeadlinePrice({ ...discountDeadlinePrice, description: e.target.value })}
                    InputProps={{
                        type:"number",
                        endAdornment: discountDeadlinePrice.selectedOption === EDiscountDeadlinePrice.DISCOUNT 
                            ? '%'
                            : discountDeadlinePrice.selectedOption === EDiscountDeadlinePrice.DEADLINE
                                ? 'dias'
                                : '-'
                    }}
                />
            }
        </Container>
    );
}

export default DiscountDeadlinePrice;