import { StrictMode } from 'react'
import reactDom from 'react-dom/client'
import { App } from './App.jsx'

const rootElement = document.getElementById('root')

const root = reactDom.createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
