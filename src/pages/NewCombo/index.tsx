import React from 'react';
import { TextField } from '@material-ui/core';
import { Container, NewComboForm } from './styles';
import GpdSkuQuant from './GpdSkuQuant';

const NewCombo: React.FC = () => {
    return (
        <Container>
            <h2>Criar novo combo</h2>

            <NewComboForm className="new-combo-form">
                <TextField
                    className="form-input name"
                    error={false}
                    required
                    label="Nome do combo"
                    // helperText="Incorrect entry."
                />

                <TextField
                    className="form-input salesOffice"
                    error={false}
                    required
                    label="Escritório de vendas"
                />

                <GpdSkuQuant />

            </NewComboForm>
        </Container>
    );
}

export default NewCombo;