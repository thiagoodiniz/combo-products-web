import React from 'react';

import { InputContainer } from './styles';

interface ICustomInputProps {
    value: string;
    onChange(value: string): void;
    placeholder: string;
    icon?: JSX.Element;
    type?: 'number' | 'password'; 
}

const CustomInput: React.FC<ICustomInputProps> = ({ value, onChange, placeholder, icon, type }) => {
    return (
        <InputContainer>
            {   icon &&
                <div className="icon-content">{icon}</div> 
            }
            <input 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={type ? type : 'string'}
            />
        </InputContainer>
    );
}

export default CustomInput;