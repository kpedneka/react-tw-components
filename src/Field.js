import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeProvider'

/** Input fields for text based inputs */
class TextField extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = ThemeContext

    render() {
        const { theme, _ } = this.context
        return(
            <input type={this.props.type} className={`border-2 focus:outline-none  rounded-md ${theme.light.secondary.borderColor} ${theme.dark.secondary.borderColor} ${theme.light.primary.focusColor} ${theme.dark.primary.focusColor}`}>
            </input>
        )
    }
}

TextField.propTypes = {
    type: PropTypes.string.isRequired,
    typeValidation: function(props) {
        switch(props.type) {
            case 'text':
            case 'password':
                break;
            default:
                return new Error(`Field type ${props.type} is not supported ... yet.`)
        }
    }
}

export default TextField