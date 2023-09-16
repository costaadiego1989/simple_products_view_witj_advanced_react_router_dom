// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

// import { useEffect } from "react"
import { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

import ListaProdutos from "./components/Produto/ListaProdutos";

const App = () => {
  const { produtos } = useContext(GlobalContext);
  
  return (<>
    {produtos?.map(produto => <ListaProdutos key={produto.id} produto={produto} />)}
  </>)
}

export default App;
