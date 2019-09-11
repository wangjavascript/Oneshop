import React, { Component } from 'react'

export default class right extends Component {
    setGou=(id)=>{
       console.log(id)
    }
    render() {
        let { list} = (this.props)
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
                                <button onClick={this.setGou.bind(this,item.id)}>{item.flag?'已收藏':'未收藏'}</button>
                            </li>
                        </ul>
                    )
                }
               
            </div>
        )
    }
}
