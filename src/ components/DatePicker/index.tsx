import React from 'react';
import { CustomDatePicker } from './styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import 'moment/locale/pt-br';
import moment from 'moment';

const ptBR = moment.locale('pt-br');

interface DatePickerProps {
    selectedDate: moment.Moment | null;
    setDate(date: moment.Moment | null): void;
    placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, setDate, placeholder='' }) => {

    return (
        <MuiPickersUtilsProvider
            locale={ptBR}
            libInstance={moment} 
            utils={MomentUtils}
        >
            <CustomDatePicker
                autoOk
                helperText=""
                variant="inline"
                format="DD/MM/YY"
                value={selectedDate}
                onChange={setDate}
                placeholder={placeholder}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;