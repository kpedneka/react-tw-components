import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeProvider'

class SidebarItem extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextType = ThemeContext

  render() {
    const Icon = this.props.icon
    const { theme, setTheme } = this.context
    return (
      <li className='space-y-2 mb-2 align-baseline'>
        <div
          className={`inline-flex hover:${theme.light.primary.bgColorHover} w-full mx-1 p-1 rounded-sm items-center space-x-4 align-baseline`}
        >
          {Icon === undefined ? null : Icon}
          <p>{this.props.title}</p>
        </div>
        {this.props.children}
      </li>
    )
  }
}

SidebarItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default SidebarItem
