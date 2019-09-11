import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <NavLink to='/home'>
                    <span className="iconfont">&#xe613;</span>
                    首页
                </NavLink>
                <NavLink to='/all'>
                    <span className="iconfont">&#xe614;</span>
                    所有商品
                </NavLink>
                <NavLink to='/shou'>
                    <span className="iconfont">&#xe615;</span>
                    收藏
                    </NavLink>
                <NavLink to='/my'>
                    <span className="iconfont">&#xe620;</span>
                    我的
                    </NavLink>
            </footer>
        )
    }
}
