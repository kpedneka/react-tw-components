import { createContext } from 'react'

/**
 * This is the default base theme that will be used if ThemeContext holds a default value
 */
export const baseTheme = {
  color: 'green',
  intensity: '400'
}

/**
 * Context object that will be used by all the components in react-tw-components
 */
export const ThemeContext = createContext({
  ...baseTheme,
  updateTheme: () => {}
})
