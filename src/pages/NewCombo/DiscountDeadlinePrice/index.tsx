import React, { useState } from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { Container } from './styles';

enum EDiscountDeadlinePrice {
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

const DiscountDeadlinePrice: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState(EDiscountDeadlinePrice.DISCOUNT);
    const [description, setDescription] = useState('');

    return (
        <Container>
            <TextField
                select
                className="options"
                value={selectedOption}
                onChange={(e: any) => {
                    setDescription('');
                    setSelectedOption(e.target.value as EDiscountDeadlinePrice)
                }}
            >
                {options.map((option) =>
                    <MenuItem key={option.option} value={option.option}>
                        {option.label}
                    </MenuItem>
                )}
            </TextField>

            <TextField
                className="description"
                error={false}
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                disabled={selectedOption === EDiscountDeadlinePrice.FIXPRICE}
                InputProps={{
                    type:"number",
                    endAdornment: selectedOption === EDiscountDeadlinePrice.DISCOUNT 
                        ? '%'
                        : selectedOption === EDiscountDeadlinePrice.DEADLINE
                            ? 'dias'
                            : '-'
                }}
            />
        </Container>
    );
}

export default DiscountDeadlinePrice;