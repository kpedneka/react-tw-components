import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeProvider'

/** Input fields for click or check based inputs */
class ClickField extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = ThemeContext

    render() {
        const { theme, _ } = this.context
        return(
            <div className='space-x-2'>
                <input 
                type={this.props.type} 
                id={this.props.id}
                name={this.props.name} 
                value={this.props.value}
                className={`border-2 focus:outline-none  rounded-md ${theme.light.primary.accentColor} ${theme.dark.primary.accentColor}`} />
                <label htmlFor={this.props.id} className='text-inherit'>{this.props.value}</label>
            </div>
        )
    }
}

ClickField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    typeValidation: function(props) {
        switch(props.type.toLowerCase()) {
            case 'radio':
            case 'checkbox':
                break;
            default:
                return new Error(`Field type ${props.type} is not supported ... yet.`)
        }
        if(props.type.toLowerCase() === 'radio') {
            if(!props['name']) return new Error('Radio buttons require a name attribute')
        }
    }
}

export default ClickField