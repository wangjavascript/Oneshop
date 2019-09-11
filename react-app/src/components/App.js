import React, { Component } from 'react'

import Home from '../components/Home'
import All from '../components/All'
import Shou from '../components/Shou'
import My from '../components/My'
import Detail from '../components/Detail'
import Footer from './Footer'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

export default class APP extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/all' component={All}></Route>
                    <Route path='/shou' component={Shou}></Route>
                    <Route path='/my' component={My}></Route>
                    <Route path='/detail' component={Detail}></Route>
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

