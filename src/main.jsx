import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import './I18next.jsx';
import jsVectorMap from 'jsvectormap';
import { FilterProductProvider } from './context/FilterProductContext.jsx';
import 'jsvectormap/dist/jsvectormap.css';
import 'jsvectormap/dist/maps/world.js'; // Example: World map
import { LanguageDirectionProvider } from './context/LanguageDirectionContext.jsx'
import { ThemeModeProvider } from './context/ThemeModeContext.jsx'
import { FilterEventProvider } from './context/FilterEventContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <LanguageDirectionProvider>
        <ThemeModeProvider>
          <FilterProductProvider>
            <FilterEventProvider>
              <App />
            </FilterEventProvider>
          </FilterProductProvider>
        </ThemeModeProvider>
      </LanguageDirectionProvider>
    </HashRouter>
  </StrictMode>,
)
