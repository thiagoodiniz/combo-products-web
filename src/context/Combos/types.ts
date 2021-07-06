export interface ICombosState {
    combos: IProductComboData[] | undefined;
    loading: boolean;
    error: boolean;
    toastMessage?: string;
}

export interface IProductComboData {
    id: string;
    name: string;
    salesOffice: string;
    gpdSkuQuantList: ISkuQuantItem[];
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
    DISCOUNT = "Desconto",
    DEADLINE = "Prazo",
    FIXPRICE = "Preço fixo"
}

export interface IDiscountDeadlinePrice {
    type: EDiscountDeadlinePrice;
    description: string;
}
export interface ISkuQuantItem {
    sku: string;
    quantity: string;
}
