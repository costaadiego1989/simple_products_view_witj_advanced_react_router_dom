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

const App = () => {
  const { produto } = useContext(GlobalContext);
  console.log(produto);

  // useEffect(() => {
  //   console.log('oip', produto);
  // }, []);

  return (
    <h2>App</h2>
  )
}

export default App;
