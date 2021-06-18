import React from 'react';
import NumberFormat from 'react-number-format';
import { MenuItem, TextField } from '@material-ui/core';
import { Container } from './styles';
import { EDiscountDeadlinePrice, IDiscountDeadlinePrice } from '../../../services/ProductCombo/types';

interface IDiscountDeadlinePriceProps {
    discountDeadlinePrice: IDiscountDeadlinePrice;
    updateDiscountDeadlinePrice(discountDeadlinePrice: IDiscountDeadlinePrice): void;
    disabled: boolean;
}

interface NumberFormatCustomProps {
    inputRef: (instance: NumberFormat | null) => void;
    onChange: (event: { target: { value: string } }) => void;
    value: string;
  }

function NumberFormatCustom(props: NumberFormatCustomProps) {
    const { inputRef, onChange, value, ...other } = props;

    return (
        <NumberFormat
            {...other}
            value={value}
            getInputRef={inputRef}
            onValueChange={(values: any) => onChange({ target: { value: values.value }})}
            thousandSeparator={"."}
            decimalSeparator={","}
            isNumericString={true}
            prefix="R$ "
        />
    );
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
            
            <TextField
                className="description"
                error={false}
                value={discountDeadlinePrice.description}
                onChange={(e: any) => updateDiscountDeadlinePrice({ ...discountDeadlinePrice, description: e.target.value })}
                InputProps={{
                    type:"text",
                    endAdornment: discountDeadlinePrice.type === EDiscountDeadlinePrice.DISCOUNT 
                        ? '%'
                        : discountDeadlinePrice.type === EDiscountDeadlinePrice.DEADLINE
                            ? 'dias'
                            : '',
                    inputComponent: discountDeadlinePrice.type === EDiscountDeadlinePrice.FIXPRICE ? NumberFormatCustom as any : undefined,
                }}
                disabled={disabled}
            />
        </Container>
    );
}

export default DiscountDeadlinePrice;