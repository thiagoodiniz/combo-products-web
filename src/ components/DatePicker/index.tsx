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
    hideBorder?: boolean;
    disabled?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, setDate, placeholder='', hideBorder=false, disabled=false}) => {

    return (
        <MuiPickersUtilsProvider
            locale={ptBR}
            libInstance={moment} 
            utils={MomentUtils}
        >
            <CustomDatePicker
                className={ hideBorder ? 'hideBorder' : ''}
                autoOk
                helperText=""
                variant="inline"
                format="DD/MM/YY"
                value={selectedDate}
                onChange={setDate}
                placeholder={placeholder}
                disabled={disabled}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;