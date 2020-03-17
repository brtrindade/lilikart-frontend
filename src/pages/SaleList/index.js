import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

export default function SaletList() {
    const [sales, setSales] = useState([])
    
    useEffect(() => {
        async function loadSales() {
            const response = await api.get('/sales')
            setSales(response.data);
        }

        loadSales();
    }, [sales]);

    return (
        <>
            <nav>
                <ul className="product-list">
                    {sales.map(sale => (
                        <Link to={`/sale/${sale._id}/details`} style={{ textDecoration: 'none' }} key={sale._id}>
                            <li>
                                <strong>{sale.client.nome}</strong>
                                <span>{sale.tema}</span>
                                <span>{sale.totalPrice} R$</span>
                                <span>{sale.payed ? 'Pago' : 'Pagamento pendente'}</span>
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