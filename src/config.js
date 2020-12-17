require('dotenv').config();

export const API_SURVER = process.env.REACT_APP_API_URL;
export const PUBLIC_SERVICE = REACT_APP_API_STATUS; //- if the PUBLIC_SERVICE is y then "ADMIN" will be remove. or "ADMIN" button will be ok. 
export const EXPORTERS_API = `http://${API_SURVER}:8000`;
export const EXPORTER_API = `http://${API_SURVER}:8000/exporters`;
export const CATEGORIES_API = `http://${API_SURVER}:8000/categories`;
export const EXPORTER_ADMIN_API = `http://${API_SURVER}:8000/exporter`;
export const TOKEN_API = `http://${API_SURVER}:8000/token`;
