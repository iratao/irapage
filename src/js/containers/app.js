import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  NavLink,
  IndexRoute
} from 'react-router-dom'

import styles from './app.css'
import Plan from './plan'
import Video from './video'
import BrowserCalories from './browser-calories'

export class Root extends Component {
  render() {
    const { location } = this.props
    const showMenu = location.pathname === '/' ? true : false
    return (
      <div>
        <ul className={`${styles.list} ${styles.center} ${showMenu ? styles.show : styles.hide}`}>
          <li><NavLink to='/plan'>2018新年计划</NavLink></li>
          <li><NavLink to='/video'>视频炸弹</NavLink></li>
          <li><NavLink to='/browsercalories'>浏览器卡路里</NavLink></li>
        </ul>
      </div>)
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Root} />
          <Route path="/plan" component={Plan}/>
          <Route path="/video" component={Video}/>
          <Route path="/browsercalories" component={BrowserCalories}/>
        </div>
      </Router>)
  }
}
