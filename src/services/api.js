// a pasta services é para arquivos que envolvem importação/exportação de dados via api
import axios from 'axios';
const api = axios.create({baseURL:'https://rocketseat-node.herokuapp.com/api'})
export default api;
