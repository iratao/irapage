import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import styles from './app.css'
import Plan from './plan'
import Video from './video'

class Root extends Component {
  render() {
    const { location } = this.props
    const showMenu = location.pathname === '/' ? true : false
    return (
      <div>
        <ul className={`${styles.list} ${styles.center} ${showMenu ? styles.show : styles.hide}`}>
          <li><NavLink to='/plan'>新年计划</NavLink></li>
          <li><NavLink to='/video'>视频炸弹</NavLink></li>
        </ul>
        <Route path="/plan" component={Plan}/>
        <Route path="/video" component={Video}/>
      </div>)
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Root}/>
      </Router>
      )
  }
}
