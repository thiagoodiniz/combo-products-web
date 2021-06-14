import { IProductComboData } from "./types";

const combos: IProductComboData[] = [
    {active: true, name: 'Combo pregos 01', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/04/2021 - 01/09/2021', discountDeadlinePrice: 'Desconto / 30%'},
    {active: true, name: 'Combo São João', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/05/2021 - 01/08/2021', discountDeadlinePrice: 'Prazo / 30 dias'},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: 'Preço fixo'},
    {active: false, name: 'Venda x', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 60 dias'},
    {active: false, name: 'São Paulo Rio', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Desconto / 20%'},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 50 dias'},
    {active: false, name: 'Vários produtos', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Preço fixo'},
    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo 60 dias'},

    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo 60 dias'},
    {active: true, name: 'Combo pregos 01', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/04/2021 - 01/09/2021', discountDeadlinePrice: 'Desconto / 30%'},
    {active: false, name: 'Venda x', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 60 dias'},
    {active: true, name: 'Combo São João', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/05/2021 - 01/08/2021', discountDeadlinePrice: 'Prazo / 30 dias'},
    {active: false, name: 'São Paulo Rio', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Desconto / 20%'},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 50 dias'},
    {active: false, name: 'Vários produtos', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Preço fixo'},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: 'Preço fixo'},

    {active: false, name: 'Vários produtos', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Preço fixo'},
    {active: true, name: 'Combo São João', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/05/2021 - 01/08/2021', discountDeadlinePrice: 'Prazo / 30 dias'},
    {active: false, name: 'Venda x', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 60 dias'},
    {active: true, name: 'Combo pregos 01', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/04/2021 - 01/09/2021', discountDeadlinePrice: 'Desconto / 30%'},
    {active: false, name: 'São Paulo Rio', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Desconto / 20%'},
    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo 60 dias'},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: 'Preço fixo'},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 50 dias'},

    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo 60 dias'},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: 'Preço fixo'},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: 'Prazo / 50 dias'},
];

export class ProductComboService {

    async loadCombos(): Promise<IProductComboData[]> {
        return combos;
    }
}