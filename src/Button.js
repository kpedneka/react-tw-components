import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeProvider'

class Button extends React.Component {
    constructor(props) {
        super(props)
      }
    static contextType = ThemeContext
    
    render() {
        let content
        const { theme, _ } = this.context
        if (this.props.link === null) {
            content = <span className='inline-flex px-1'>{this.props.text} {this.props.icon}</span>
        } else {
            content = <a className='inline-flex px-1' href={this.props.link}>{this.props.text}{this.props.icon}</a>
        }

        return(
            <button 
              className={`group space-x-2 mx-2 px-2 py-1 rounded-sm border-2 ${theme.light.primary.borderColor} hover:bg-green-300`}>
                {content}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string
}

export default Button