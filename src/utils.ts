import { IProductComboData } from "./services/ProductCombo/types";
import moment from 'moment';

export const isComboActive = (combo: IProductComboData): boolean => {
    if(combo.startDate === '' || combo.endDate === '') {
        return false;
    }
    
    const dateFormat = 'DD/MM/YYYY';
    const today = moment();
    const startDate = moment(combo.startDate, dateFormat);
    const endDate = moment(combo.endDate, dateFormat);

    return today.isSameOrAfter(startDate)
        && today.isSameOrBefore(endDate);
}