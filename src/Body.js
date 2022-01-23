import React from 'react'
import PropTypes from 'prop-types'

class Body extends React.Component {
  render() {
    return (
      <div className='truncate absolute z-10 top-0 my-24 mx-12 py-16 px-10 transform -translate-x-0 md:translate-x-64 transition duration-200 ease-in-out'>
        {' '}
        {this.props.children}
      </div>
    )
  }
}

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Body
