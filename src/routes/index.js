import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Produto from './components/Produto'
import Contato from './pages/contato.jsx'
import ProdutoDescricao from './components/Produto/ProdutoDescricao.jsx'
import ProdutoAvaliacoes from './components/Produto/ProdutoAvaliacoes.jsx'

const routes = () => {
<BrowserRouter>
    <Routes>
        <Route path='' element={<App />} />
        <Route path='produto/:id/*' element={<Produto />}>
        <Route path='descricao' element={<ProdutoDescricao />} />
        <Route path='avaliacoes' element={<ProdutoAvaliacoes />} />
        </Route>
        <Route path='contato' element={<Contato />} />
    </Routes>
</BrowserRouter>
}

export default routes