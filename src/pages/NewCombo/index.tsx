import React, { useEffect, useState } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Container, NewComboForm, SaveFormButton } from './styles';
import GpdSkuQuant from './GpdSkuQuant';
import Dates from './Dates';
import DiscountDeadlinePrice from './DiscountDeadlinePrice';
import MultipleCheckboxSelect from '../../ components/MultipleCheckboxSelect';
import { EDiscountDeadlinePrice, IDiscountDeadlinePrice, IGpdSkuQuantItem, IProductComboData } from '../../services/ProductCombo/types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImgUploadField from './ImgUploadField';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ERoutes } from '../../routes';

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
    saveCombo(name: string, salesOffice: string, gpdSkuQuantList: IGpdSkuQuantItem[], uf: string, channels: string[], startDate: string, endDate: string, discountDeadlinePrice: IDiscountDeadlinePrice, base64FileImg: string, salesPlatform: string[]): void;
    comboToEdit?: IProductComboData;
    editCombo?(combo: IProductComboData): void;
}

const NewCombo: React.FC<INewComboProps> = ({ saveCombo, comboToEdit, editCombo }) => {
    const [loading, setLoading] = useState(false);

    const [comboName, setComboName] = useState('');
    const [salesOffice, setSalesOffice] = useState('');
    const [gpdSkuQuantList, setGpdSkuQuantList] = useState<IGpdSkuQuantItem[]>([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);
    const [salesPlatform, setsalesPlatform] = useState<string[]>([]);
    const [base64FileImg, setBase64FileImg] = useState<string>('');
    const [discountDeadlinePrice, setDiscountDeadlinePrice] = useState<IDiscountDeadlinePrice>({ type: EDiscountDeadlinePrice.DISCOUNT, description: '' });

    const [initialized, setInitialized] = useState(false);
    const [isEditing] = useState(comboToEdit !== undefined);

    const initEditCombo = (combo: IProductComboData) => {
        setInitialized(true);
        setComboName(combo.name);
        setSalesOffice(combo.salesOffice);
        setGpdSkuQuantList(combo.gpdSkuQuantList);
        setSelectedState(combo.uf);
        setSelectedChannels(combo.channels);
        setStartDate(moment(combo.startDate, 'DD/MM/YYYY'));
        setEndDate(moment(combo.endDate, 'DD/MM/YYYY'));
        setsalesPlatform(combo.salesPlatform);
        setBase64FileImg(combo.base64FileImg);
        setDiscountDeadlinePrice(combo.discountDeadlinePrice);
    }

    useEffect(() => {
        if(comboToEdit !== undefined && !initialized){
            initEditCombo(comboToEdit);
        }
    });

    const onSave = () => {
        setLoading(true);

        setTimeout(() => {
            if(isEditing && editCombo) {
                editCombo(
                    {   
                        ...(comboToEdit as IProductComboData),
                        name: comboName, 
                        salesOffice, 
                        gpdSkuQuantList, 
                        uf: selectedState, 
                        channels: selectedChannels, 
                        startDate: startDate?.format('DD/MM/YYYY') || '', 
                        endDate: endDate?.format('DD/MM/YYYY') || '', 
                        discountDeadlinePrice, 
                        base64FileImg, 
                        salesPlatform
                    }
                );
            } else {
                saveCombo(
                    comboName, 
                    salesOffice, 
                    gpdSkuQuantList, 
                    selectedState, 
                    selectedChannels, 
                    startDate?.format('DD/MM/YYYY') || '', 
                    endDate?.format('DD/MM/YYYY') || '', 
                    discountDeadlinePrice, 
                    base64FileImg, 
                    salesPlatform
                );
            }
        }, 1000);
    }

    const canSave = (): boolean => {
        return comboName !== '';
    }

    return (
        <Container>
            <h2>{isEditing ? 'Editar combo' : 'Criar novo combo'}</h2>

            <NewComboForm className="new-combo-form">
                <TextField
                    className="form-input name"
                    error={false}
                    required
                    label="Nome do combo"
                    value={comboName}
                    onChange={(e: any) => setComboName(e.target.value)}
                    disabled={loading}
                    // helperText="Campo obrigatório"
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
                    base64File={base64FileImg}
                    setBase64File={setBase64FileImg}
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

            <div className="actions">
                {   isEditing &&
                    <Link to={ERoutes.HOME}>
                        <Button
                            style={{textTransform: 'none'}}
                            color="secondary"
                            variant="contained"
                            disabled={loading}
                        >
                            Cancelar
                        </Button>
                    </Link>
                }

                <SaveFormButton 
                    onClick={onSave}
                    disabled={loading || !canSave()}
                    variant="contained"
                >
                    {   loading &&
                        <CircularProgress size={24} />
                    }

                    {   !loading &&
                        <>Salvar</>
                    }
                </SaveFormButton>

            </div>

        </Container>
    );
}

export default NewCombo;