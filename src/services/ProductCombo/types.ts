export interface IProductComboData {
    active: boolean;
    name: string;
    salesOffice: string;
    uf: string;
    channels: string[];
    startDate: string;
    endDate: string;
    discountDeadlinePrice: IDiscountDeadlinePrice;
}

export enum EDiscountDeadlinePrice {
    DISCOUNT = "DISCOUNT",
    DEADLINE = "DEADLINE",
    FIXPRICE = "FIXPRICE"
}

export interface IDiscountDeadlinePrice {
    type: EDiscountDeadlinePrice;
    description: string;
}