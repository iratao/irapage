import React, { Component } from "react"
import ReactDOM from 'react-dom'
import styles from './100css.scss'

class CSS002 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
      noAnimation: true
    }
  }

  onMenuClickHandler(evt){
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      noAnimation: false
    }))
  }

  render() {
    let isAcitve = this.state.isActive
    let noAnimation = this.state.noAnimation ? styles['no-animation'] : ''
    let active = isAcitve ? styles['active'] : ''

    return (
      <div className={styles.frame}>
        <div className={styles.center}>
          <div className={`${styles['menu-icon']} ${active}`} onClick={this.onMenuClickHandler.bind(this)}>
            <div className={`${styles['line-1']} ${noAnimation}`}></div>
            <div className={`${styles['line-2']} ${noAnimation}`}></div>
            <div className={`${styles['line-3']} ${noAnimation}`}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default class CSS extends Component {
  render() {
    return (
      <div>
        <CSS002 />
      </div>
    )
  }
}
