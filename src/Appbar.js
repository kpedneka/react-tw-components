import React from 'react'
import PropTypes, { object } from 'prop-types'
import { ThemeContext } from './ThemeProvider'
import { HiMenu } from 'react-icons/hi'

class Appbar extends React.Component {
  render() {
    const Icon = this.props.icon
    return (
      <ThemeContext.Provider value={this.context}>
        <header
          className={`z-20 top-0 right-0 py-4 absolute md:hidden w-screen h-16 bg-${this.context.color}-${this.context.intensity} text-white text-2xl space-x-4 flex flex-row`}
        >
          {/* <header className='z-20 top-0 right-0 py-4 absolute md:hidden w-screen h-16 bg-indigo-700 text-white text-2xl space-x-4 flex flex-row'> */}
          <HiMenu className='h-8 w-8' onClick={this.props.onClick} />
          {this.props.icon === undefined ? null : Icon}
          <span className='px-4 h-full text-white text-left align-center'>
            {this.props.title}
          </span>
        </header>
      </ThemeContext.Provider>
    )
  }
}

Appbar.contextType = ThemeContext

Appbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired
}

export default Appbar
