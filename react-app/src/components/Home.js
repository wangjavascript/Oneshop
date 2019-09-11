import React, { Component } from 'react'

import Header from './Header'
import Swiper from './swiper'


export default class Home extends Component {
    state = {
        data: ['https://dummyimage.com/300x100&text=hello',
            'https://dummyimage.com/300x100&text=hello',
            'https://dummyimage.com/300x100&text=hello',
            'https://dummyimage.com/300x100&text=hello'
        ]
    }
    render() {
        return (
            <>
                <Header title={'首页'} sousuo={'🔍'} sezhi={<span className="iconfont">&#xe612;</span>}/>
                <div className='home'>
                    <Swiper data={this.state.data}/>
                
                    <div className='ifont'>
                        <ul>
                            <span className="iconfont">&#xe61e;</span>
                            新品
                        </ul>
                        <ul>
                            <span className="iconfont">&#xe61a;</span>
                            新品
                        </ul>
                        <ul>
                            <span className="iconfont">&#xe626;</span>
                            新品
                        </ul>
                        <ul>
                            <span className="iconfont">&#xe629;</span>
                            新品
                        </ul>
                        <ul>
                            <span className="iconfont">&#xe62b;</span>
                            新品
                        </ul>
                    </div>
                </div>
               
            </>
        )
    }
}
