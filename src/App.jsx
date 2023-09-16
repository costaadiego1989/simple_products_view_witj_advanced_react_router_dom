import { useState, useEffect } from 'react'
import './App.css'
import Produto from './components/Produto';

function App() {
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const [produto, setProduto] = useState(null);

  const handleClick = async (e) => {
    const value = e.target.innerHTML;
    const products = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${value}`);
    const json = await products.json();
    if (produto !== null) setProduto(null);
    setProduto(json);
    localStorage.setItem('produto', JSON.stringify(produto));
  }

  useEffect(() => {
    const localProduct = window.localStorage.getItem('produto')
    const localProductJson = JSON.parse(localProduct);
    if(localProductJson !== null) setProduto(localProductJson);
  }, []);

  return (
    <>
      {produto && <Produto produto={produto} />}
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </>
  )
}

export default App
