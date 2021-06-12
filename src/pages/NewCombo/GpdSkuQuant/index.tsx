import React from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Container, AddGPDButton, TagsContainer } from './styles';
import plusIcon from '../../../assets/images/icons/plus-small.svg';

interface IGpd {
    id: string;
    label: string;
}

const gpds: IGpd[] = [
    { id: '1', label: 'Prego'},
    { id: '2', label: 'Vergalhão'},
];

const GpdSkuQuant: React.FC = () => {
    return (
        <>
            <Container>
                <TextField
                    select
                    className="gpd-item-field"
                    label="GPD"
                >
                    {gpds.map((gpd, idx) =>
                        <MenuItem key={idx} value={gpd.id}>
                            {gpd.label}
                        </MenuItem>
                    )}
                </TextField>

                <TextField
                    className="gpd-item-field"
                    error={false}
                    label="SKU"
                />
                <TextField
                    className="gpd-item-field"
                    error={false}
                    label="Quantidade"
                />

                <AddGPDButton>
                    <img src={plusIcon} className="plus" alt="plus button"/>
                </AddGPDButton>
            </Container>

            <TagsContainer>
                <div className="tag">
                    <span>GPD - SKU - Quantidade</span>
                    <Button>x</Button>    
                </div>
            </TagsContainer>
        </>
    );
}

export default GpdSkuQuant;