import React from 'react'
import { ThemeContext } from './ThemeProvider'

class Collection extends React.Component {
    constructor(props) {
        super(props)
    }
    static context = ThemeContext

    render() {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
                {this.props.children}
            </div>
        )
    }
}

export default Collection