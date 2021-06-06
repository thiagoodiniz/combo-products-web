import React, { useState } from 'react';
import { Container, SearchButton, CleanSearchButton } from './styles';
import DatePicker from '../../../../ components/DatePicker';
import moment from 'moment';

const TableFilter: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);
    
    const cleanSearch = () => {
        setSearchValue('');
        setStartDate(null);
        setEndDate(null);
    }

    return (
        <Container>
            <div>
                <span>Busca:</span>
                <input 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
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

            {   (searchValue || startDate || endDate) &&
                <CleanSearchButton
                    onClick={cleanSearch}
                >
                    Limpar busca
                </CleanSearchButton>
            }

        </Container>
    );
}

export default TableFilter;