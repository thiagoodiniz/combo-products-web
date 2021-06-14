import React from 'react';
import { FormGroup, FormLabel } from '@material-ui/core';
import DatePicker from '../../../ components/DatePicker';
import moment from 'moment';
import { DateFormControlLabel, DatesFormControl} from './styles';

interface IDatesProps {
    startDate: moment.Moment | null;
    setStartDate(startDate: moment.Moment | null): void;
    endDate: moment.Moment | null;
    setEndDate(endDate: moment.Moment | null): void;
    disabled: boolean;
}

const Dates: React.FC<IDatesProps> = ({ startDate, setStartDate, endDate, setEndDate, disabled}) => {

    const hasErrorInDate = (date: moment.Moment | null) => {
        return date !== null && !date.isValid();
    }

    return (
        <DatesFormControl>
            <FormLabel component="legend">Data</FormLabel>
            <FormGroup aria-label="position" row>
                <DateFormControlLabel
                    title={hasErrorInDate(startDate) ? 'Data inválida' : ''}
                    className={
                        hasErrorInDate(startDate) 
                        ? 'invalid-date' 
                        : disabled
                            ? 'disabled'
                            : ''
                    }
                    control={
                        <DatePicker
                            placeholder="__/__/__" 
                            selectedDate={startDate} 
                            setDate={setStartDate}
                            hideBorder={true}
                            disabled={disabled}
                        />
                    }
                    value={startDate}
                    label="Início"
                    labelPlacement="start"
                />

                <DateFormControlLabel
                    title={hasErrorInDate(endDate) ? 'Data inválida' : ''}
                    className={
                        hasErrorInDate(endDate) 
                        ? 'invalid-date' 
                        : disabled
                            ? 'disabled'
                            : ''
                    }
                    control={
                        <DatePicker
                            placeholder="__/__/__" 
                            selectedDate={endDate} 
                            setDate={setEndDate}
                            hideBorder={true}
                            disabled={disabled}
                        />
                    }
                    value={endDate}
                    label="Fim"
                    labelPlacement="start"
                />

            </FormGroup>
        </DatesFormControl>
    );
}

export default Dates;