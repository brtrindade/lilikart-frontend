import React from 'react';
import {Link} from 'react-router-dom';

export default function Index() {

    return(
        <>
            <p>
                Bem vindo ao painel de administração
            </p>
            <Link to="/product">
                <button className="btn">Cadastrar Produto</button>
            </Link>
            <Link to="/product/list">
                <button className="btn">Listar Produtos</button>
            </Link>
            <Link to="/client">
                <button className="btn">Cadastrar Cliente</button>
            </Link>
            <Link to="/client/list">
                <button className="btn">Listar Clientes</button>
            </Link>
            <Link to="/sale">
                <button className="btn">Cadastrar Pedido</button>
            </Link>
            <Link to="/sale/list">
                <button className="btn">Listar Pedidos</button>
            </Link>
        </>
    );

}
