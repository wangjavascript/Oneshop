import React, { Component } from 'react'
import Header from './Header'

export default class Shou extends Component {
    state = { list: [],flag:null }
    componentDidMount() {
        let list = JSON.parse(localStorage.list) ? JSON.parse(localStorage.list) : []
        this.setState({ list })
    }
    fn = (e) => {
        let {flag}=this.state
        e.target.checked = flag 
        this.setState({})
    }
    setFn = (e) => {
       
        this.state.flag = e.target.checked 
        this.setState({})
    }
    render() {
        let { list} = this.state
        return (
            <>
                <Header title={'收藏'} />
                <div className='home'>
                    {
                        list && list.map((item, index) =>

                            <ul className='shouUl' key={index}>
                                <li className='shou-ipon'>
                                    <input type='checkbox' onChange={this.fn} />
                                </li>
                                <li className='shou-left'>
                                    <img src={item.url} />
                                </li>
                                <li className='shou-right'>
                                    <h3>{item.name}</h3>
                                    <p>{item.title}</p>
                                </li>
                            </ul>
                        )
                    }
                    <div className='allcheck'> 全选： <input type='checkbox'
                        onChange={this.setFn} /> </div>
                </div>
            </>
        )
    }
}
