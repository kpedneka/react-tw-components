import './tailwind.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'react-tw-components'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
