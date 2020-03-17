import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import './styles.css'

export default function SaleDetails({match, history}) {

    const [sale, setSale] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadSale() {
            const response = await api.get(`/sales/${match.params.sale_id}`)
            setSale(response.data);
            setProducts(response.data.products)
        }
        
        loadSale();
    }, [match.params.sale_id]);

    return (
        <>
            <div className="details">
                <p>Tema: <strong>{sale.tema}</strong></p>
                <span>Total da compra: {sale.totalPrice} R$</span>
            </div>

            <ul className="product-list">
                {products.map(produto => (
                    <li key={produto.product._id}>
                        <strong>{produto.product.nome}</strong>
                        <span>{produto.quantity} un.</span>
                        <span>{produto.total} R$</span>
                    </li>
                ))}
            </ul>
            <button className="btn" onClick={()=>{history.goBack()}}>Voltar</button>           
        </>
    )
    
}