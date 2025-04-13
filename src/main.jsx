import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "./scss/base/variable.scss"
import "./scss/base/common.scss"
import "./scss/component/header.scss"
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
