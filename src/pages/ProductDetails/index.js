import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import './styles.css'

export default function ProductDetails({match, history}) {

    const [product, setProduct] = useState({})

    useEffect(() => {
        async function loadProduct() {
            const response = await api.get(`/products/${match.params.product_id}`)
            setProduct(response.data);
        }

        loadProduct();
    }, );

    return (
        <>
            <div className="details">
                <strong>{product.nome}</strong>
                <span>{product.descricao}</span>
                <span className="valor">Preço {product.valor} R$</span>
            </div>
            <button className="btn" onClick={()=>{history.goBack()}}>Voltar</button>
        </>
    )
    
}