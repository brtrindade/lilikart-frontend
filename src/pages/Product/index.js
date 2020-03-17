import React, {useState} from 'react';

import api from '../../services/api';

export default function Index({history}) {

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        if(productName === '' || productDescription === '') {
            return
        } else {

            await api.post('/products', {
                "nome": productName,
                "descricao": productDescription,
                "valor": productPrice
            });
    
            history.push('/');

        }

    };

    return(
        <>
            <p>
                Novo Produto
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input
                    required
                    id="name"
                    placeholder="Nome do produto"
                    value={productName}
                    onChange={event => setProductName(event.target.value)}
                />

                <label htmlFor="name">Descrição</label>
                <input
                    required
                    id="name"
                    placeholder="Descrição do produto"
                    value={productDescription}
                    onChange={event => setProductDescription(event.target.value)}
                />

                <label htmlFor="name">Preço</label>
                <input
                    id="name"
                    placeholder="Preço do produto"
                    value={productPrice}
                    onChange={event => setProductPrice(event.target.value)}
                />
                <button type="submit" className="btn">Cadastrar</button>
                <button className="btn cancel" onClick={()=>{history.goBack()}}>Cancelar</button>
            </form>
        </>
    );

}
