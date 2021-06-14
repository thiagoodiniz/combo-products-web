import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { Container } from './styles';

interface IMultipleCheckboxSelectProps {
    title: string;
    options: string[];
    selectedValues: string[];
    setSelectedValues(newValues: string[]): void;
    disabled: boolean;
}

const MultipleCheckboxSelect: React.FC<IMultipleCheckboxSelectProps> = ({ title, options, selectedValues, setSelectedValues, disabled }) => {
    return (
        <Container>
            <FormControl component="fieldset" className="form-input channel">
                <FormLabel component="legend">{ title }</FormLabel>
                <FormGroup 
                    aria-label="position" 
                    row
                >
                    {   options.map((option, idx) => 
                        <FormControlLabel
                            key={idx}
                            control={<Checkbox color="primary" />}
                            label={option}
                            labelPlacement="end"
                            checked={selectedValues.includes(option)}
                            disabled={disabled}
                            onChange={(e: any) => {
                                if(e.target.checked){
                                    setSelectedValues([...selectedValues, option]);
                                } else {
                                    setSelectedValues(selectedValues.filter(val => val !== option));
                                }
                            }}
                        />
                    )}
                </FormGroup>
            </FormControl>

            <hr />
        </Container>
    );
}

export default MultipleCheckboxSelect;