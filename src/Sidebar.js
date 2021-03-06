import React from 'react'
import PropTypes from 'prop-types'
import { HiX } from 'react-icons/hi'

import { ThemeContext } from './ThemeProvider'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  static contextType = ThemeContext

  render() {
    const Icon = this.props.icon
    const { theme, setTheme } = this.context
    return (
      <nav
        className={`z-50 ${theme.light.primary.bgColor} ${theme.dark.primary.bgColor} ${theme.light.primary.textColor} ${theme.dark.primary.textColor} sm:w-1/2 md:w-1/3 lg:w-1/4 h-screen py-6 space-y-6 inset-y-0 left-0 transform ${ this.props.state ? '-translate-x-0' : '-translate-x-full' } relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className='flex flex-row space-x-4 place-content-center'>
          <div className='inline-flex text-4xl px-4'>
            {this.props.icon === undefined ? null : Icon}
            <div className='text-2xl px-4'>{this.props.title}</div>
          </div>
          <HiX
            className='md:hidden m-auto h-6 w-6 opacity-50 content-center relative hover:opacity-100'
            onClick={this.props.onClose}
          />
        </div>
        <ul className='whitespace-normal flex flex-col w-full px-4'>
          {this.props.children}
        </ul>
      </nav>
    )
  }
}

Sidebar.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  state: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Sidebar
