import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { Container } from './styles';

interface IMultipleCheckboxSelectProps {
    title: string;
    options: string[];
    selectedValues: string[];
    setSelectedValues(newValues: string[]): void;
}

const MultipleCheckboxSelect: React.FC<IMultipleCheckboxSelectProps> = ({ title, options, selectedValues, setSelectedValues }) => {
    return (
        <Container>
            <FormControl component="fieldset" className="form-input channel">
                <FormLabel component="legend">{ title }</FormLabel>
                <FormGroup aria-label="position" row>
                    {   options.map((option, idx) => 
                        <FormControlLabel
                            key={idx}
                            control={<Checkbox color="primary" />}
                            label={option}
                            labelPlacement="end"
                        />
                    )}
                </FormGroup>
            </FormControl>

            <hr />
        </Container>
    );
}

export default MultipleCheckboxSelect;