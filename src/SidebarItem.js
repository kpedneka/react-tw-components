import React from 'react'
import PropTypes from 'prop-types'

class SidebarItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Icon = this.props.icon

    return (
      <div className='space-y-2 mb-2 align-baseline'>
        <div className='inline-flex items-center space-x-4 align-baseline'>
          {Icon === undefined ? null : Icon}
          <p>{this.props.title}</p>
        </div>
        {this.props.children}
      </div>
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
