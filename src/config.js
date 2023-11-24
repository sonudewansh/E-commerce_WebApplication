const LOCALHOST = "http://localhost:5173/"
// const PROD = "https://todoauth11.vercel.app/"
const PROD ="https://ecommerce-sonudewanshs-projects.vercel.app/"
export const URL = `${PROD}`;

const LOGIN = () => URL + 'api/login';
const SIGNUP =  URL + 'api/sign-up';

export { LOGIN, SIGNUP}

