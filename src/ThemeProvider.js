import React, { createContext } from 'react'

/**
 * This is the default base theme that will be used if ThemeContext holds a default value
 */
const baseTheme = {
  color: 'green',
  intensity: '400'
}

/**
 * Context object that will be used by all the components in react-tw-components
 */
const ThemeContext = createContext({})

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: baseTheme
    }
    this.setTheme = this.setTheme.bind(this)
  }

  setTheme(theme) {
    this.setState(prevState =>{
      return{
           ...prevState,
           theme: theme
      }
   })
  }

  render() {
    return(
      <ThemeContext.Provider value={{theme: this.state.theme, setTheme: this.setTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
export { ThemeContext }