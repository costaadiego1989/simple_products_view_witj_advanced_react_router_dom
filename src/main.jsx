import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Contato from './pages/contato.jsx'
import ProdutoDetails from './components/Produto/ProdutoDetalhes'
import ProdutoDescricao from './components/Produto/ProdutoDescricao.jsx'
import ProdutoAvaliacoes from './components/Produto/ProdutoAvaliacoes.jsx'

import { GlobalContextProvider } from './contexts/GlobalContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />} />
      <Route path='produto/:id/*' element={<ProdutoDetails />}>
        <Route path='descricao' element={<ProdutoDescricao />} />
        <Route path='avaliacoes' element={<ProdutoAvaliacoes />} />
      </Route>
      <Route path='contato' element={<Contato />} />
    </Routes>
  </BrowserRouter>
  </GlobalContextProvider>,
)
