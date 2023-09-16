import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
)
