import { useContext } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";

const ProdutoDetalhes = () => {
    const {id} = useParams();
    const { produtos } = useContext(GlobalContext);
    const produtoAtual = produtos?.filter(produto => produto.id === id)[0];

  return (<>
    <img src={produtoAtual?.fotos[0]?.src} alt={produtoAtual?.fotos[0]?.titulo} />
    <h2>{produtoAtual?.nome}</h2>
    <p>R${produtoAtual?.preco}</p>
    <button>Comprar</button>
    <nav>
        <NavLink to='descricao'>Descrição</NavLink> {' | '}<NavLink to='avaliacoes'>Avaliações</NavLink>
    </nav>
    <section>
        <Outlet />
    </section>
    </>)
}

export default ProdutoDetalhes