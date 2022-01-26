import React from 'react'
import PropTypes, { object } from 'prop-types'
import { ThemeContext } from './ThemeProvider'
import { HiMenu } from 'react-icons/hi'


class Appbar extends React.Component {
  static contextType = ThemeContext
  
  render() {
    const Icon = this.props.icon
    const { theme, setTheme } = this.context
    return (
        <header
          className={`z-20 top-0 right-0 py-4 absolute md:hidden w-screen h-16 bg-${theme.color}-${theme.intensity} text-white text-2xl space-x-4 flex flex-row`}
        >
          <HiMenu className='h-8 w-8' onClick={this.props.onClick} />
          {this.props.icon && Icon}
          <span className='px-4 h-full text-white text-left align-center'>
            {this.props.title}
          </span>
        </header>
    )
  }
}

// Appbar.propTypes = {
//   title: PropTypes.string,
//   icon: PropTypes.element,
//   onClick: PropTypes.func.isRequired
// }

export default Appbar
