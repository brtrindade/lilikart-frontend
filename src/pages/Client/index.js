import React, {useState} from 'react';

import api from '../../services/api';

export default function Index({history}) {

    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [clientInstagram, setClientInstagram] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        if(clientName === '' || clientPhone === '') {
            return
        } else {
            await api.post('/clients', {
                "nome": clientName,
                "telefone": clientPhone,
                "instagram": clientInstagram,
            });

            history.push('/');
        }

    };

    return(
        <>
            <p>
                Novo Cliente
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input
                    required
                    id="name"
                    placeholder="Nome do cliente"
                    value={clientName}
                    onChange={event => setClientName(event.target.value)}
                />

                <label htmlFor="tel">Telefone</label>
                <input
                    required
                    id="tel"
                    placeholder="Telefone do cliente"
                    value={clientPhone}
                    onChange={event => setClientPhone(event.target.value)}
                />

                <label htmlFor="insta">Instagram</label>
                <input
                    id="insta"
                    placeholder="Instagram do cliente"
                    value={clientInstagram}
                    onChange={event => setClientInstagram(event.target.value)}
                />
                <button type="submit" className="btn">Cadastrar</button>
                <button className="btn cancel" onClick={()=>{history.goBack()}}>Cancelar</button>
            </form>
        </>
    );

}
