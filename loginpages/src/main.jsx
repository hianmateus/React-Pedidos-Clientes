import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home />
  </React.StrictMode>,
)
