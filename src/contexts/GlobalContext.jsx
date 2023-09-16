// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React, { useEffect, useState } from 'react';

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
    const [produto, setProduto] = useState(null);
    
    useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
            .then(res => res.json())
            .then(res => setProduto(res));
    });

    function limparDados() {
        setProduto(null);
    }

    <GlobalContext.Provider value={{produto, setProduto, limparDados}}>{children}</GlobalContext.Provider>
}
