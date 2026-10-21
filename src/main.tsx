import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './theme/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider></ThemeProvider>
  </StrictMode>,
)
