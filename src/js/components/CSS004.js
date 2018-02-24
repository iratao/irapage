import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './CSS004.scss'

export default class CSS004 extends Component {
  render() {
    return (
      <div className={styles.frame}>
        <div className={styles.center}>
          <div className={styles['dot-1']}/>
          <div className={styles['dot-2']}/>
          <div className={styles['dot-3']}/>
        </div>
      </div>
    )

  }
}
