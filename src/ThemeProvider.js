import React, { createContext } from 'react'

/**
 * This is the default base theme that will be used if ThemeContext holds a default value
 */
const baseTheme = {
  light: {
      primary: {
        bgColor: 'bg-green-400',
        bgHover: 'hover:bg-green-500',
        borderColor: 'border-green-500',
        focusColor: 'focus-visible:border-green-500',
        textColor: 'text-white'
      },
      secondary: {
        bgColor: 'bg-gray-100',
        bgHover: 'hover:bg-gray-300',
        borderColor: 'border-gray-300',
        focusColor: 'focus-visible:border-gray-300',
        textColor: 'text-black'
      }
  },
  dark: {
    primary: {
      bgColor: 'dark:bg-emerald-700',
      bgHover: 'dark:hover:bg-emerald-600',
      borderColor: 'dark:border-emerald-600',
      focusColor: 'dark:focus-visible:border-emerald-600',
      textColor: 'dark:text-white'
    },
    secondary: {
      bgColor: 'dark:bg-slate-700',
      bgHover: 'dark:hover:bg-slate-600',
      borderColor: 'dark:border-slate-600',
      focusColor: 'dark:focus-visible:border-slate-600',
      textColor: 'dark:text-white'
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
