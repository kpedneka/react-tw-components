import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeProvider'

class Body extends React.Component {
  static contextType = ThemeContext

  render() {
    const { theme, setTheme } = this.context
    return (
      <div
        className={`absolute w-full md:w-2/3 lg:w-3/4 h-screen z-10 top-0 right-0 px-12 py-16 ${theme.light.secondary.bgColor} ${theme.dark.secondary.bgColor}`}
      >
        {this.props.children}
      </div>
    )
  }
}

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Body
