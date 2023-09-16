/* eslint-disable react/prop-types */
import Produto from "."

// eslint-disable-next-line react/prop-types
const ListaProdutos = ({ produto: { id, nome, preco, fotos } }) => {
  return <Produto id={id} nome={nome} preco={preco} fotos={fotos} />
}

export default ListaProdutos