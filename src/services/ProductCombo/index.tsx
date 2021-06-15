import { EDiscountDeadlinePrice, IDiscountDeadlinePrice, IGpdSkuQuantItem, IProductComboData } from "./types";

let combos: IProductComboData[] = [
    {id: '1', active: true, name: 'Combo pregos 01', salesOffice: '111224', uf: 'SP', channels: ['Varejo'], startDate: '01/04/2021', endDate: '01/09/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DISCOUNT, description: '30%' }, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Juntos somos mais', 'MC1', 'Smartchain']},
    {id: '2', active: true, name: 'Combo São João', salesOffice: '132569', uf: 'SP', channels: ['Varejo'], startDate: '01/05/2021', endDate: '01/08/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '30 dias'}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: []},
    {id: '3', active: true, name: 'Combo 1456', salesOffice: '111224', uf: 'RJ', channels: ['Varejo'], startDate: '01/05/2021', endDate: '01/06/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['MC1', 'Smartchain']},
    {id: '4', active: false, name: 'Venda x', salesOffice: '132569', uf: 'MG', channels: ['Varejo'], startDate: '01/02/2021', endDate: '01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Juntos somos mais', 'MC1', 'Smartchain']},
    {id: '5', active: false, name: 'São Paulo Rio', salesOffice: '111224', uf: 'SP', channels: ['Varejo'], startDate: '01/02/2021', endDate: '01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DISCOUNT, description: '20%'}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Juntos somos mais', 'Smartchain']},
    {id: '6', active: false, name: 'Combo pregos 01', salesOffice: '132569', uf: 'SP', channels: ['Varejo'], startDate: '01/02/2021', endDate: '01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '50 dias'}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Juntos somos mais', 'MC1']},
    {id: '7', active: false, name: 'Vários produtos', salesOffice: '111224', uf: 'RJ', channels: ['Varejo'], startDate: '01/02/2021', endDate: '01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Juntos somos mais', 'MC1', 'Smartchain']},
    {id: '8', active: false, name: '114566', salesOffice: '132569', uf: 'MG', channels: ['Varejo'], startDate: '01/02/2021', endDate: '01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Smartchain']},
    {id: '9', active: false, name: '114566', salesOffice: '132569', uf: 'MG', channels: ['Varejo'], startDate: '01/02/2021', endDate: '01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '60 dias'}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Juntos somos mais', 'MC1', 'Smartchain']},
    {id: '10', active: false, name: 'Combo 1456', salesOffice: '111224', uf: 'RJ', channels: ['Varejo'], startDate: '01/05/2021', endDate: '01/06/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.FIXPRICE, description: ''}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Juntos somos mais', 'MC1', 'Smartchain']},
    {id: '11', active: false, name: 'Combo pregos 01', salesOffice: '132569', uf: 'SP', channels: ['Varejo'], startDate: '01/02/2021', endDate: '01/03/2021', discountDeadlinePrice: { type: EDiscountDeadlinePrice.DEADLINE, description: '50 dias'}, gpdSkuQuantList: [{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'},{gpd: '1', sku: '3263215', quantity: '180un.'}], salesPlatform: ['Juntos somos mais', 'MC1', 'Smartchain']},
];

export class ProductComboService {

    async loadCombos(): Promise<IProductComboData[]> {
        return combos;
    }

    async saveCombo(name: string, salesOffice: string, gpdSkuQuantList: IGpdSkuQuantItem[], uf: string, channels: string[], startDate: string, endDate: string, discountDeadlinePrice: IDiscountDeadlinePrice, salesPlatform: string[]) {

        const combo: IProductComboData = {
            id: (combos.length + 1).toString(),
            active: true,
            name,
            salesOffice,
            gpdSkuQuantList,
            uf,
            channels,
            startDate,
            endDate,
            discountDeadlinePrice,
            salesPlatform
        }
        
        combos.push(combo);
        combos.sort((a,b) => a.active && !b.active ? -1 : !a.active && b.active ? 1 : 0);
    }

    async removeCombo(comboId: string): Promise<IProductComboData[]>  {
        combos = combos.filter(combo => combo.id !== comboId);
        return combos;
    }
}