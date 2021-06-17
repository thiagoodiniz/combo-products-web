export interface IProductComboData {
    id: string;
    name: string;
    salesOffice: string;
    gpdSkuQuantList: IGpdSkuQuantItem[];
    uf: string;
    channels: string[];
    startDate: string;
    endDate: string;
    discountDeadlinePrice: IDiscountDeadlinePrice;
    base64FileImg: string;
    salesPlatform: string[];

    recentlyAdded?: boolean;
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
export interface IGpdSkuQuantItem {
    gpd: string;
    sku: string;
    quantity: string;
}

export interface IGpd {
    id: string;
    label: string;
}

export const gpds: IGpd[] = [
    { id: '1', label: 'Prego'},
    { id: '2', label: 'Vergalhão'},
];