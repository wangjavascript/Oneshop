import React, { Component } from 'react'

export default class left extends Component {
    state = { count: 0, list: [] }
    componentDidMount() {

    }
    fn = () => {
        let { left } = this.props.list
        if (left) {
            this.setState({ list: left[0].list })
        }
    }
    set = (index, item) => {
        this.setState({ list: item.list })
        this.setState({ count: index })
        let { fn } = this.props
        fn(item)
    }
    render() {
        let { left } = this.props.list
        let { count } = this.state
        return (
            <div className='left'>
                {
                    left && left.map((item, index) =>
                        <li className={index === count ? 'active' : ''}
                            onClick={this.set.bind(this, index, item)} key={index}>{item.title}</li>
                    )
                }
            </div>
        )
    }
}
