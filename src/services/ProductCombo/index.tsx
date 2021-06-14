import { EDiscountDeadlinePrice, IProductComboData } from "./types";

const combos: IProductComboData[] = [
    {active: true, name: 'Combo pregos 01', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/04/2021 - 01/09/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DISCOUNT, description: '30%' }},
    {active: true, name: 'Combo São João', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/05/2021 - 01/08/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '30 dias'}},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}},
    {active: false, name: 'Venda x', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}},
    {active: false, name: 'São Paulo Rio', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DISCOUNT, description: '20%'}},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '50 dias'}},
    {active: false, name: 'Vários produtos', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}},
    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}},

    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}},
    {active: true, name: 'Combo pregos 01', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/04/2021 - 01/09/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DISCOUNT, description: '30%' }},
    {active: false, name: 'Venda x', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}},
    {active: true, name: 'Combo São João', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/05/2021 - 01/08/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '30 dias'}},
    {active: false, name: 'São Paulo Rio', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DISCOUNT, description: '20%'}},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '50 dias'}},
    {active: false, name: 'Vários produtos', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}},

    {active: false, name: 'Vários produtos', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}},
    {active: true, name: 'Combo São João', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/05/2021 - 01/08/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '30 dias'}},
    {active: false, name: 'Venda x', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}},
    {active: true, name: 'Combo pregos 01', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/04/2021 - 01/09/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DISCOUNT, description: '30%' }},
    {active: false, name: 'São Paulo Rio', salesOffice: 111224, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DISCOUNT, description: '20%'}},
    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '50 dias'}},

    {active: false, name: '114566', salesOffice: 132569, uf: 'MG', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}},
    {active: true, name: 'Combo 1456', salesOffice: 111224, uf: 'RJ', channel: 'Varejo', dateRange: '01/05/2021 - 01/06/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}},
    {active: false, name: 'Combo pregos 01', salesOffice: 132569, uf: 'SP', channel: 'Varejo', dateRange: '01/02/2021 - 01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '50 dias'}},
];

export class ProductComboService {

    async loadCombos(): Promise<IProductComboData[]> {
        return combos;
    }
}