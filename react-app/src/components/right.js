import React, { Component } from 'react'

export default class right extends Component {
    state = { list: [] }
    setGou = (item) => {
        let { list } = this.state
        list.push(item)
        localStorage.list=JSON.stringify(list)
        // let { countList } = this.props
        // countList.map(item => {
        //     item.map(val => {
        //         if (val.id === id) {
        //             val.flag = true
        //         }
        //     })
        // })
        this.setState({})
    }
    render() {
        let { list } = this.props
        return (
            < div className='right'>
                {
                    list && list.map((item, index) =>
                        <ul key={index}>
                            <li>
                                <img src={item.url} />
                            </li>
                            <li>
                                <h3>{item.name}</h3>
                                <p>{item.title}</p>
                                <button onClick={this.setGou.bind(this, item)}>{item.flag ? '已收藏' : '未收藏'}</button>
                            </li>
                        </ul>
                    )
                }
            </div>
        )
    }
}
