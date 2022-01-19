import React from 'react'

class Appbar extends React.Component {
  render() {
    return (
      <header className='top-0 right-0 absolute md:hidden w-screen h-16 bg-indigo-700'>
        <span className='text-2xl px-4 h-full text-white text-left align-center'>
          {this.props.title}
        </span>
      </header>
    )
  }
}

export default Appbar
