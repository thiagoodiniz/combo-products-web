export interface IProductComboData {
    active: boolean;
    name: string;
    salesOffice: number;
    uf: string;
    channel: string;
    dateRange: string;
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