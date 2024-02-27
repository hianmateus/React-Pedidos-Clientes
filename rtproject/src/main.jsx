import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './styles/routes'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Routes />
  </React.StrictMode>,
)
