import React, { Component } from 'react'
import Header from './Header'
import Left from './left'
import Right from './right'

import axios from 'axios'
import '../mock'

export default class All extends Component {
    state = { data: {}, count: 0 }
    componentDidMount() {
        axios.get('/list').then(({ data }) => {
            console.log(data, '----000')
            this.setState({
                data
            })
        })
    }
    setList = (index) => {
        this.setState({ count: index })
    }
    render() {
        let { left } = this.state.data
        let { count } = this.state
        return (
            <>

                <Header title={'所有商品'} />
                <div className='all-home'>
                    <Left list={left} fn={this.setList} />
                    {
                        left && left.map((item, index) =>
                            index === count ? <Right key={index} list={item.list} /> : ''
                        )
                    }
                </div>
            </>
        )
    }
}
