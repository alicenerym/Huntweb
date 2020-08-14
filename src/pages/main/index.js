import React, {Component} from 'react';
import api from "../../services/api";
import './styles.css';
import { Link } from 'react-router-dom';
export default class Main extends Component{
    //state é usado para armazenar valores em formto de objetos pq é como o React consegue renderizar informações
    state = {
        products:[],
        productInfo:{},
        page:1
    }
    //para executar uma ação logo quando o componente for exibido em tela
    componentDidMount(){
        this.loadProducts();
    }
    //precisa usar uma arraw function dentro de um componente react pq senão ele não diferencia o this
    loadProducts = async(page = 1) =>{
        const response = await api.get(`/products?page=${page}`);
        const { docs,...productInfo } = response.data; // a reticencias serve para dizer que serão armzenados os demais dados 
        this.setState({products:docs,productInfo,page});//muda o valor do state definido
    };
    prevPage = () => {
        const { page, productInfo } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;
        if (page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    };
    
    render(){
        const{products,page,productInfo} = this.state
        return (
            <div className="product-list">
                {products.map(product =>(
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to ={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}