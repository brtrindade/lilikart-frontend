import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

export default function ProductList() {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products')
            setProducts(response.data);
            console.log("heuhue")
        }

        loadProducts();
    },[products]);

    return (
        <>
            <nav>
                <ul className="product-list">
                    {products.map(product => (
                        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                            <li key={product._id}>
                                <strong>{product.nome}</strong>
                                <span>{product.valor} R$</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
            <Link to="/">
                <button className="btn">Voltar</button>
            </Link>
        </>
    )
}