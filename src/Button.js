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
            content = <span className='inline-flex px-2 space-x-1'><span>{this.props.text}</span>{this.props.icon}</span>
        } else {
            content = <a className='inline-flex px-2 space-x-1' href={this.props.link}><span>{this.props.text}</span>{this.props.icon}</a>
        }

        return(
            <button 
              className={`px-2 py-1 rounded-sm border-2 ${theme.light.primary.borderColor} ${theme.light.primary.bgColor} ${theme.light.primary.bgHover}`}
              onClick={this.props.onClick}>
                {content}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
    link: PropTypes.string
}

export default Button