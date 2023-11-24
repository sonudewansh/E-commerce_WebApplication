const LOCALHOST = "http://localhost:5173/"
const PROD ="https://notebooksfield.vercel.app/"
const URL = `${LOCALHOST}`;

const LOGIN = () => URL + 'api/login';
const SIGNUP =  URL + 'api/sign-up';



export { LOGIN, SIGNUP}