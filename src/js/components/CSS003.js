import React, { Component } from "react"
import ReactDOM from 'react-dom'
import styles from './CSS003.scss'

export default class CSS003 extends Component {
  render() {
    return (
      <div className={styles['frame']}>
        <div className={styles['center']}>
          <div className={styles['circle']}>
            <div className={styles['sky']}></div>
            <div className={styles['sun']}></div>
            <div className={styles['side-left']}></div>
            <div className={styles['side-right']}></div>
            <div className={styles['shadow']}></div>
            <div className={styles['ground']}></div>
          </div>
        </div>
      </div>
    )
  }
}

// clip-path https://tympanus.net/codrops/css_reference/clip-path/
