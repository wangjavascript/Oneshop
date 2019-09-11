import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        let { title, sousuo, sezhi } =this.props
        return (
            <header className='header'>
                <div>
                    {sousuo}
                </div>
                <div>
                    {title}
                </div>
                <div>
                    {sezhi}
                </div>
               
            </header>
        )
    }
}
