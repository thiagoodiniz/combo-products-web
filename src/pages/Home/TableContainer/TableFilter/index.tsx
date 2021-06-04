import React, { useState } from 'react';
import { Container, SearchButton } from './styles';
import DatePicker from '../../../../ components/DatePicker';
import moment from 'moment';

const TableFilter: React.FC = () => {
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);
    
    return (
        <Container>
            <div>
                <span>Busca:</span>
                <input />
            </div>

            <div>
                <span>Data:</span>
                <DatePicker 
                    selectedDate={startDate}
                    setDate={setStartDate}
                    placeholder="de"
                />
                <span className="divisor">/</span>
                <DatePicker 
                    selectedDate={endDate}
                    setDate={setEndDate}
                    placeholder="até"
                />
            </div>
            <SearchButton />

        </Container>
    );
}

export default TableFilter;