import React, { useState } from 'react';
import { Container, SearchButton, CleanSearchButton } from './styles';
import DatePicker from '../../../../ components/DatePicker';
import moment from 'moment';
import { IProductComboData } from '../../../../services/ProductCombo/types';

interface ITableFilterProps {
    combos: IProductComboData[];
    setFilteredCombos(filteredCombos:IProductComboData[]): void;
    onCleanFilters(): void;
    isFiltered: boolean;
}

const TableFilter: React.FC<ITableFilterProps> = ({ combos, setFilteredCombos, onCleanFilters, isFiltered }) => {
    const [searchValue, setSearchValue] = useState('');
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);
    
    const cleanSearch = () => {
        setSearchValue('');
        setStartDate(null);
        setEndDate(null);
        onCleanFilters();
    }

    const canFilter = (): boolean => {
        return (searchValue !== '' && (startDate === null && endDate === null))
            || (startDate !== null && endDate !== null);
    }

    const onClickFilter = () => {
        const filterByInputSearch = (combos: IProductComboData[]): IProductComboData[] => {
            return combos.filter(combo => {
                const searchTerm = searchValue.toUpperCase();
                return combo.name.toUpperCase().includes(searchTerm)
                    || combo.salesOffice.toUpperCase().includes(searchTerm)
                    || combo.uf.toUpperCase().includes(searchTerm)
                    || combo.channels.some(channel => channel.includes(searchTerm));
            });
        }
        
        const filterByDate = (combos: IProductComboData[]): IProductComboData[] => {
            return combos.filter(combo =>{
                return (startDate !== null && startDate.isSameOrAfter(moment(combo.startDate, 'DD/MM/YYYY')))
                    && (endDate !== null && endDate.isSameOrBefore(moment(combo.endDate, 'DD/MM/YYYY')));
            });
        }

        let filtered = combos;

        if(searchValue !== '') {
            filtered = filterByInputSearch(filtered);
        }
        
        if(endDate !== null && startDate !== null ) {
            filtered = filterByDate(filtered);
        }

        setFilteredCombos(filtered);
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
                    error={endDate !== null && !startDate}
                />
                <span className="divisor">/</span>
                <DatePicker 
                    selectedDate={endDate}
                    setDate={setEndDate}
                    placeholder="até"
                    error={startDate !== null && !endDate}
                />
            </div>

            <div className="actions">
                <SearchButton 
                    onClick={onClickFilter}
                    disabled={!canFilter()}
                />

                {   (isFiltered || searchValue || startDate || endDate) &&
                    <CleanSearchButton
                        onClick={cleanSearch}
                    >
                        Limpar busca
                    </CleanSearchButton>
                }
            </div>


        </Container>
    );
}

export default TableFilter;