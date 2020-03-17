import React, {useState} from 'react';

import api from '../../services/api';

export default function Index({history}) {

    const [client, setClient] = useState({});
    const [theme, setTheme] = useState('');
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [payed, setPayed] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        if (client === '' || theme === '' || products.length === 0) {
            return
        } else {

            await api.post('/sales', {
                "client": client,
                "tema": theme,
                "products": products,
                "totalPrice": totalPrice,
                "payed": payed,
            });

            history.push('/');
        }
    };

    return(
        <>
            <p>
                Novo Pedido
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input
                    required
                    id="name"
                    placeholder="Nome do cliente"
                    value={client.nome}
                    onChange={event => setClient(event.target.value)}
                />

                <label htmlFor="theme">Tema</label>
                <input
                    required
                    id="theme"
                    placeholder="Descrição do tema"
                    value={theme}
                    onChange={event => setTheme(event.target.value)}
                />
                {/* editar */}
                <label htmlFor="products">Produtos</label>
                <input
                    required
                    id="products"
                    placeholder="Preço do produto"
                    value={products}
                    onChange={event => setProducts(event.target.value)}
                />
                <button type="submit" className="btn">Cadastrar</button>
                <button className="btn cancel" onClick={()=>{history.goBack()}}>Cancelar</button>
            </form>
        </>
    );

}
