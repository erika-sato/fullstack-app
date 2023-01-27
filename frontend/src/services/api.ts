// CRIAÇÃO DE UMA NOVA INSTÂNCIA DO AXIOS PARA NOSSA API
import axios from 'axios';
import { PUBLIC_API_URL } from '../config/index';

export const api = axios.create({
    baseURL: PUBLIC_API_URL
});