import React from 'react'

class Body extends React.Component {
  render() {
    return (
      <div className='absolute top-0 my-24 mx-12 py-16 px-10 transform -translate-x-0 md:translate-x-64 transition duration-200 ease-in-out'>
        {' '}
        {this.props.children}
      </div>
    )
  }
}

export default Body
