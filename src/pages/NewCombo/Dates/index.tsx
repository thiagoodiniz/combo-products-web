import React from 'react';
import { FormControl, FormGroup, FormLabel } from '@material-ui/core';
import DatePicker from '../../../ components/DatePicker';
import moment from 'moment';
import { DateFormControlLabel } from './styles';

interface IDatesProps {
    startDate: moment.Moment | null;
    setStartDate(startDate: moment.Moment | null): void;
    endDate: moment.Moment | null;
    setEndDate(endDate: moment.Moment | null): void;
}

const Dates: React.FC<IDatesProps> = ({ startDate, setStartDate, endDate, setEndDate}) => {

    const hasErrorInDate = (date: moment.Moment | null) => {
        return date !== null && !date.isValid();
    }

    return (
        <FormControl 
            className="form-input dates"
            component="fieldset"
        >
            <FormLabel component="legend">Data</FormLabel>
            <FormGroup aria-label="position" row>
                <DateFormControlLabel
                    title={hasErrorInDate(startDate) ? 'Data inválida' : ''}
                    className={hasErrorInDate(startDate) ? 'invalid-date' : ''}
                    control={
                        <DatePicker
                            placeholder="__/__/__" 
                            selectedDate={startDate} 
                            setDate={setStartDate}
                            hideBorder={true}
                        />
                    }
                    value={startDate}
                    label="Início"
                    labelPlacement="start"
                />

                <DateFormControlLabel
                    title={hasErrorInDate(endDate) ? 'Data inválida' : ''}
                    className={hasErrorInDate(endDate) ? 'invalid-date' : ''}
                    control={
                        <DatePicker
                            placeholder="__/__/__" 
                            selectedDate={endDate} 
                            setDate={setEndDate}
                            hideBorder={true}
                        />
                    }
                    value={endDate}
                    label="Fim"
                    labelPlacement="start"
                />

            </FormGroup>
        </FormControl>
    );
}

export default Dates;