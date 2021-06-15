import React, { useState } from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { Container, NewComboForm, SaveFormButton } from './styles';
import GpdSkuQuant from './GpdSkuQuant';
import Dates from './Dates';
import DiscountDeadlinePrice from './DiscountDeadlinePrice';
import MultipleCheckboxSelect from '../../ components/MultipleCheckboxSelect';
import { EDiscountDeadlinePrice, IDiscountDeadlinePrice, IGpdSkuQuantItem, IProductComboData } from '../../services/ProductCombo/types';
import { ProductComboService } from '../../services/ProductCombo';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImgUploadField from './ImgUploadField';

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

interface INewComboProps {
    onAddCombo(): void;
}

const NewCombo: React.FC<INewComboProps> = ({ onAddCombo }) => {
    const [loading, setLoading] = useState(false);

    const [comboName, setComboName] = useState('');
    const [salesOffice, setSalesOffice] = useState('');
    const [gpdSkuQuantList, setGpdSkuQuantList] = useState<IGpdSkuQuantItem[]>([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);
    const [salesPlatform, setsalesPlatform] = useState<string[]>([]);
    const [fileImg, setFileImg] = useState<File>();
    const [discountDeadlinePrice, setDiscountDeadlinePrice] = useState<IDiscountDeadlinePrice>({ type: EDiscountDeadlinePrice.DISCOUNT, description: '' });

    const onSave = () => {
        console.log({
            comboName,
            salesOffice,
            gpdSkuQuantList,
            selectedState,
            selectedChannels,
            startDate,
            endDate,
            discountDeadlinePrice,
            fileImg,
            salesPlatform,
        });

        const combo: IProductComboData = {
            active: true,
            name: comboName,
            salesOffice,
            gpdSkuQuantList,
            uf: selectedState,
            channels: selectedChannels,
            startDate: startDate?.format('DD/MM/YYYY') || '',
            endDate: endDate?.format('DD/MM/YYYY') || '',
            discountDeadlinePrice: discountDeadlinePrice,
            salesPlatform,
        }

        setLoading(true);

        setTimeout(() => {
            const comboSvc = new ProductComboService();
            comboSvc.saveCombo(combo)
                .then(() => {
                    onAddCombo();
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 1500);
    }

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
                    disabled={loading}
                    // helperText="Incorrect entry."
                />

                <TextField
                    className="form-input salesOffice"
                    error={false}
                    label="Escritório de vendas"
                    value={salesOffice}
                    onChange={(e: any) => setSalesOffice(e.target.value)}
                    disabled={loading}
                />

                <GpdSkuQuant 
                    tagList={gpdSkuQuantList}
                    updateTagList={setGpdSkuQuantList}
                    disabled={loading}
                />

                <TextField
                    select
                    className="form-input states"
                    label="Estado"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    disabled={loading}
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
                    disabled={loading}
                />

                <Dates 
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    disabled={loading}
                />

                <DiscountDeadlinePrice 
                    discountDeadlinePrice={discountDeadlinePrice}
                    updateDiscountDeadlinePrice={setDiscountDeadlinePrice}
                    disabled={loading}
                />

                <ImgUploadField 
                    file={fileImg}
                    setFile={setFileImg}
                    disabled={loading}
                />

                <MultipleCheckboxSelect
                    title="Plataformas de vendas"
                    options={['Juntos somos mais', 'MC1', 'Smartchain']}
                    selectedValues={salesPlatform}
                    setSelectedValues={setsalesPlatform}
                    disabled={loading}
                />
            </NewComboForm>

            <SaveFormButton 
                onClick={onSave}
                disabled={loading}
                variant="contained"
            >
                {   loading &&
                    <CircularProgress size={24} />
                }

                {   !loading &&
                    <>Salvar</>
                }
            </SaveFormButton>
        </Container>
    );
}

export default NewCombo;