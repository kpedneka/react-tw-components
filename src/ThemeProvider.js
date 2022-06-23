import React, { createContext } from 'react'

/**
 * This is the default base theme that will be used if ThemeContext holds a default value
 */
const baseTheme = {
  light: {
      primary: {
        bgColor: 'bg-green-400',
        bgHover: 'hover:bg-green-300',
        borderColor: 'border-green-400',
        textColor: 'text-white'
      },
      secondary: {
        bgColor: 'bg-gray-200',
        bgHover: 'hover:bg-gray-200',
        borderColor: 'border-gray-400',
        textColor: 'text-black'
      }
  }
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
    this.setState((prevState) => {
      return {
        ...prevState,
        theme: theme
      }
    })
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, setTheme: this.setTheme }}
      >
        <div className='w-full space-x-0 space-y-0 p-0 m-0'>
          {this.props.children}
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
export { ThemeContext, baseTheme }
