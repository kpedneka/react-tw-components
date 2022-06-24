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
        const hasLabel = this.props.name ? true : false
        let field
        if (hasLabel) {
            field = <label className='flex flex-col'>
                <span>{this.props.name}</span>
                <input type={this.props.type} id={this.props.id} placeholder={this.props.placeholder} className={`border-2 focus:outline-none rounded-md w-40 ${theme.light.secondary.borderColor} ${theme.dark.secondary.borderColor} ${theme.light.primary.focusColor} ${theme.dark.primary.focusColor}`} />
            </label>
        } else {
            field = <input type={this.props.type} id={this.props.id} placeholder={this.props.placeholder} className={`border-2 focus:outline-none rounded-md w-40 ${theme.light.secondary.borderColor} ${theme.dark.secondary.borderColor} ${theme.light.primary.focusColor} ${theme.dark.primary.focusColor}`} />
        }
        return(
            <div>
                {field}
            </div>
        )
    }
}

TextField.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
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