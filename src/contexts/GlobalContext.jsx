// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React, { useEffect, useState } from 'react';

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const GlobalContextProvider = ({ children }) => {
    const [produtos, setProdutos] = useState(null);
    
    useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto')
            .then(res => res.json())
            .then(res => setProdutos(res));
    }, []);

    return <GlobalContext.Provider value={{produtos}}>{children}</GlobalContext.Provider>
}
