const LOCALHOST = "http://localhost:5173/"
// const PROD ="https://notebooksfield.vercel.app/"
const PROD ="https://ecommerce-nine-theta-70.vercel.app/"
const URL = `${PROD}`;

const LOGIN = () => URL + 'api/login';
const SIGNUP =  URL + 'api/sign-up';



export { LOGIN, SIGNUP}