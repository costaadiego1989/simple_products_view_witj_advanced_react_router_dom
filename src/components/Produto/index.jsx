/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Produto = ({ id, nome, preco, fotos }) => {
  return (
    <div>
      <img src={fotos[0]?.src} alt={fotos[0]?.titulo} />
      <h2>{nome}</h2>
      <p>{preco}</p>
      <Link to={`produto/${id}`}>Comprar</Link>
    </div>
  )
}

export default Produto