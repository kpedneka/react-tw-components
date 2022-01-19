import React from 'react'
import { HiMenu } from 'react-icons/hi'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const closedSidebarCSS =
      'bg-indigo-700 text-white w-64 h-screen py-6 space-y-6 inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'
    const openSidebarCSS =
      'bg-indigo-700 text-white w-64 h-screen py-6 space-y-6 inset-y-0 left-0 transform -translate-x-0 md:relative md:translate-x-0 transition duration-200 ease-in-out'
    const Icon = this.state.icon
    return (
      <nav className={this.state.isOpen ? openSidebarCSS : closedSidebarCSS}>
        <div className='inline-flex text-4xl px-4'>
          {this.props.icon === undefined ? null : Icon}
          <div className='text-2xl px-4'>{this.props.title}</div>
        </div>
        <div className='overflow-y-hidden flex-col w-full px-4 border-r'>
          {this.props.children}
        </div>
      </nav>
    )
  }
}

export default Sidebar
