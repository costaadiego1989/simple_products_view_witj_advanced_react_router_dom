import { NavLink, Outlet } from "react-router-dom"

const Prouto = () => {
  return (
    <div>
      <h2>Prouto</h2>
      <NavLink to='descricao'>Descrição</NavLink> {' | '}
      <NavLink to='avaliacoes'>Avaliações</NavLink>
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default Prouto