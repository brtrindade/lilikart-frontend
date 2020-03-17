import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

export default function ProductList() {
    const [clients, setClients] = useState([])
    
    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/clients')
            setClients(response.data);
        }

        loadProducts();
    },[clients]);

    return (
        <>
            <nav>
                <ul className="product-list">
                    {clients.map(client => (
                        <Link to={`/client/${client._id}`} style={{ textDecoration: 'none' }}>
                            <li key={client._id}>
                                <strong>{client.nome}</strong>
                                <span>{client.telefone}</span>
                                <span>{client.instagram}</span>
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