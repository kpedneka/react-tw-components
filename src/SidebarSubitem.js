import React from 'react'
import PropTypes from 'prop-types'

class SidebarSubitem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='flex ml-8 space-x-4 align-baseline text-sm'>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

SidebarSubitem.propTypes = {
  title: PropTypes.string
}

export default SidebarSubitem
