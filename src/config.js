const LOCALHOST = "http://localhost:5173/"
// const PROD = "https://todoauth11.vercel.app/"
const PROD ="https://ecommerce-l8nk11p0z-sonudewanshs-projects.vercel.app/"
const URL = `${PROD}`;

const LOGIN = () => URL + 'api/login';
const SIGNUP =  URL + 'api/sign-up';

export { LOGIN, SIGNUP}

