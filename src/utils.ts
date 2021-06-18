import { IProductComboData } from "./services/ProductCombo/types";
import moment from 'moment';

export const isComboActive = (combo: IProductComboData): boolean => {
    if(combo.startDate === '' || combo.endDate === '') {
        return false;
    }
    
    const dateFormat = 'DD/MM/YYYY';
    const today = moment().startOf('day');
    const startDate = moment(combo.startDate, dateFormat);
    const endDate = moment(combo.endDate, dateFormat);

    return today.isSame(startDate) 
        || today.isSame(endDate) 
        || today.isBetween(startDate, endDate);
}

export const makeid = (length: number) => {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
   return result;
}

export function formatCurrency(textNumber: string): string {
    if(!textNumber){
        textNumber = '0';
    }
    return Number(textNumber).toLocaleString('pt-BR', {minimumFractionDigits: 2});
}