import React from 'react'
import PropTypes from 'prop-types'
import { HiX } from 'react-icons/hi'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const closedSidebarCSS =
      'z-50 bg-indigo-700 text-white w-64 h-screen py-6 space-y-6 inset-y-0 left-0 transform -translate-x-full relative md:translate-x-0 transition duration-200 ease-in-out'
    const openSidebarCSS =
      'z-50 bg-indigo-700 text-white w-64 h-screen py-6 space-y-6 inset-y-0 left-0 transform -translate-x-0 relative md:translate-x-0 transition duration-200 ease-in-out'
    const Icon = this.props.icon
    return (
      <nav className={this.props.state ? openSidebarCSS : closedSidebarCSS}>
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
        <div className='overflow-y-hidden flex-col w-full px-4 border-r'>
          {this.props.children}
        </div>
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
