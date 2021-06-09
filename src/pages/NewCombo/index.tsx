import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, TextField } from '@material-ui/core';
import { Container, NewComboForm } from './styles';
import GpdSkuQuant from './GpdSkuQuant';
import Dates from './Dates';

interface IState {
    name: string;
    uf: string;
}

const states: IState[] = [
    {name: "Acre", uf: "AC"},
    {name: "Alagoas", uf: "AL"},
    {name: "Amapá", uf: "AP"},
    {name: "Amazonas", uf: "AM"},
    {name: "Bahia", uf: "BA"},
    {name: "Ceará", uf: "CE"},
    {name: "Distrito Federal", uf: "DF"},
    {name: "Espírito Santo", uf: "ES"},
    {name: "Goiás", uf: "GO"},
    {name: "Maranhão", uf: "MA"},
    {name: "Mato Grosso", uf: "MT"},
    {name: "Mato Grosso do Sul", uf: "MS"},
    {name: "Minas Gerais", uf: "MG"},
    {name: "Pará", uf: "PA"},
    {name: "Paraíba", uf: "PB"},
    {name: "Paraná", uf: "PR"},
    {name: "Pernambuco", uf: "PE"},
    {name: "Piauí", uf: "PI"},
    {name: "Rio de Janeiro", uf: "RJ"},
    {name: "Rio Grande do Norte", uf: "RN"},
    {name: "Rio Grande do Sul", uf: "RS"},
    {name: "Rondônia", uf: "RO"},
    {name: "Roraima", uf: "RR"},
    {name: "Santa Catarina", uf: "SC"},
    {name: "São Paulo", uf: "SP"},
    {name: "Sergipe", uf: "SE"},
    {name: "Tocantins", uf: "TO"}
];

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

                <TextField
                    select
                    className="form-input states"
                    label="Estado"
                >
                    {states.map((state, idx) =>
                        <MenuItem key={idx} value={state.uf}>
                            {state.name}
                        </MenuItem>
                    )}
                </TextField>

                <FormControl component="fieldset" className="form-input channel">
                    <FormLabel component="legend">Canal</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Varejo"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>

                <Dates />

            </NewComboForm>
        </Container>
    );
}

export default NewCombo;