import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import DatePicker from '../../../ components/DatePicker';
import moment from 'moment';

const Dates: React.FC = () => {
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);

    return (
        <FormControl component="fieldset" className="form-input dates">
            <FormLabel component="legend">Data</FormLabel>
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    control={
                        <DatePicker
                            placeholder="__/__/__" 
                            selectedDate={startDate} 
                            setDate={setStartDate}
                            hideBorder={true}
                        />
                    }
                    label="Início"
                    labelPlacement="start"
                />

                <FormControlLabel
                    control={
                        <DatePicker
                            placeholder="__/__/__" 
                            selectedDate={endDate} 
                            setDate={setEndDate}
                            hideBorder={true}
                        />
                    }
                    label="Fim"
                    labelPlacement="start"
                />
            </FormGroup>
        </FormControl>
    );
}

export default Dates;