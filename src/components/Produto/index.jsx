import P from 'prop-types';

const Produto = ({ produto }) => {
    console.log(produto);
  return (<>
    <h2>Produto: {produto.nome}</h2>
    <p>R${produto.preco}</p>
    </>)
}

Produto.propTypes = {
    produto: P.object
}

export default Produto