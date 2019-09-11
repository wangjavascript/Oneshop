import React, { Component } from 'react'

export default class left extends Component {
    state = { count: 0 }
    set = (index) => {
        let { fn } = this.props
        fn( index)
        this.setState({ count: index })
    }
    render() {
        let { list } = this.props
        let { count } = this.state
        return (
            <div className='left'>
                {
                    list && list.map((item, index) =>
                        <li className={index === count ? 'active' : ''} onClick={this.set.bind(this, index)} key={index}>{item.title}</li>
                    )
                }
            </div>
        )
    }
}
