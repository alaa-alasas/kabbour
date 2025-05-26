import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import './I18next.jsx';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/jsvectormap.css';
import 'jsvectormap/dist/maps/world.js'; // Example: World map
import { LanguageDirectionProvider } from './context/LanguageDirectionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <LanguageDirectionProvider>
        <App />
      </LanguageDirectionProvider>
    </HashRouter>
  </StrictMode>,
)
