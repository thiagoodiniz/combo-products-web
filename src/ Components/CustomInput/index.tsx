import React from 'react';

import { InputContainer } from './styles';

interface ICustomInputProps {
    value: string;
    onChange(value: string): void;
    placeholder: string;
    disabled: boolean;
    icon?: JSX.Element;
    type?: 'number' | 'password'; 
}

const CustomInput: React.FC<ICustomInputProps> = ({ value, onChange, placeholder, disabled, icon, type }) => {
    return (
        <InputContainer 
            className={disabled ? 'disabled' : ''}
        >
            {   icon &&
                <div className="icon-content">{icon}</div> 
            }
            <input 
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={(e) => onChange(e.target.value)}
                type={type ? type : 'string'}
            />
        </InputContainer>
    );
}

export default CustomInput;