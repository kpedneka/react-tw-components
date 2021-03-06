import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeProvider'

class SidebarSubitem extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextType = ThemeContext

  render() {
    const { theme, setTheme } = this.context
    return (
      <div
        className={`ml-8 ${theme.light.primary.bgHover} px-2 py-1 rounded-sm space-x-4 align-baseline text-sm`}
      >
        <p>{this.props.title}</p>
      </div>
    )
  }
}

SidebarSubitem.propTypes = {
  title: PropTypes.string
}

export default SidebarSubitem
