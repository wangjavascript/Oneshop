import React, { Component } from 'react'
import Header from './Header'
import Left from './left'
import Right from './right'

import axios from 'axios'
import '../mock'

export default class All extends Component {
    state = { data: {}, list: [], val: 0, rightList: [], countList: [] }
    componentDidMount() {
        axios.get('/list').then(({ data }) => {
            this.setState({
                data
            })
            this.setState({ list: this.state.data.top[0] })
            this.setState({ rightList: this.state.data.top[0].left[0].list })
            let { countList } = this.state
            this.state.data.top.map(item => {
                (item.left).map(val => {
                    countList.push(val.list)
                })
            })
            this.setState({ countList })
        })
    }
    setList = (index) => {
        this.setState({ count: index })
    }
    set = (index, item) => {
        this.setState({ list: item })
        this.setState({ val: index })
    }
    fn = (item) => {
        this.setState({ rightList: item.list })
    }
    render() {
        let { top } = this.state.data
        let { list, val, rightList, countList } = this.state
        return (
            <>
                <Header title={'所有商品'} />
                <div className='all-home'>
                    <div className='top'>
                        {
                            top && top.map((item, index) =>
                                <span className={index === val ? 'active' : ''} onClick={this.set.bind(this, index, item)} key={index}>{item.name}</span>
                            )
                        }
                    </div>
                    <div className='all-box'>
                        <Left list={list} fn={this.fn} />
                        <Right list={rightList} countList={countList} />
                    </div>
                </div>
            </>
        )
    }
}
