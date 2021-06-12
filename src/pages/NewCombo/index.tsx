import React, { useState } from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { Container, NewComboForm } from './styles';
import GpdSkuQuant, { IGpdSkuQuantTag } from './GpdSkuQuant';
import Dates from './Dates';
import DiscountDeadlinePrice from './DiscountDeadlinePrice';
import MultipleCheckboxSelect from '../../ components/MultipleCheckboxSelect';

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
    const [comboName, setComboName] = useState('');
    const [salesOffice, setSalesOffice] = useState('');
    const [tagList, setTagList] = useState<IGpdSkuQuantTag[]>([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
    const [salesPlatform, setsalesPlatform] = useState<string[]>([]);

    return (
        <Container>
            <h2>Criar novo combo</h2>

            <NewComboForm className="new-combo-form">
                <TextField
                    className="form-input name"
                    error={false}
                    label="Nome do combo"
                    value={comboName}
                    onChange={(e: any) => setComboName(e.target.value)}
                    // helperText="Incorrect entry."
                />

                <TextField
                    className="form-input salesOffice"
                    error={false}
                    required
                    label="Escritório de vendas"
                    value={salesOffice}
                    onChange={(e: any) => setSalesOffice(e.target.value)}
                />

                <GpdSkuQuant 
                    tagList={tagList}
                    updateTagList={setTagList}
                />

                <TextField
                    select
                    className="form-input states"
                    label="Estado"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                >
                    {states.map((state, idx) =>
                        <MenuItem key={idx} value={state.uf}>
                            {state.name}
                        </MenuItem>
                    )}
                </TextField>


                <MultipleCheckboxSelect
                    title="Canal"
                    options={['Varejo']}
                    selectedValues={selectedChannels}
                    setSelectedValues={setSelectedChannels}
                />

                <Dates />

                <DiscountDeadlinePrice />

                <MultipleCheckboxSelect
                    title="Plataformas de vendas"
                    options={['Juntos somos mais', 'MC1', 'Smartchain']}
                    selectedValues={salesPlatform}
                    setSelectedValues={setsalesPlatform}
                />

            </NewComboForm>
        </Container>
    );
}

export default NewCombo;