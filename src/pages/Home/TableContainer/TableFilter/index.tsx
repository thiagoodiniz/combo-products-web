import React from 'react';
import { Container, SearchButton } from './styles';

const TableFilter: React.FC = () => {
    return (
        <Container>
            <div>
                <span>Busca:</span>
                <input />
            </div>

            <div>
                <span>Data:</span>
                <input className="date" placeholder="de" />
                /
                <input className="date" placeholder="até" />
            </div>

            <SearchButton />

        </Container>
    );
}

export default TableFilter;