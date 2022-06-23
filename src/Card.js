import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeProvider'

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = ThemeContext

    render() {
        const { theme, _ } = this.context
        return(
            <div className={`hover:drop-shadow-lg w-full rounded border ${theme.light.primary.borderColor} ${theme.light.secondary.bgColor}`}>
                { this.props.image === undefined ? null : this.props.image }
                <div className='container'>
                    { this.props.title === undefined ? null : <h4 className='font-semibold'>{this.props.title}</h4> }
                    { this.props.subtitle === undefined ? null : <h6 className='font-light text-sm'>{this.props.subtitle}</h6> }
                </div>
            </div>
        )
    }

}

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.element
}

export default Card