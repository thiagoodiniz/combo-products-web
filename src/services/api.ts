import axios from 'axios';

export const productComboApi = axios.create({ baseURL: process.env.REACT_APP_API });

export enum EProductComboApiEndpoints {
    CHANNELS = '/channels'
}