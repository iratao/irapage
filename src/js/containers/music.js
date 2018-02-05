import React, { Component } from "react"
import ReactDOM from 'react-dom'

import styles from './music.css'

function Singer(props) {
  return <span className={styles.singer}>{props.children}</span>
}

export default class Music extends Component {
  render() {
    return (
      <div className={`${styles.center} ${styles.music}`}>
        <h2>那些年迷恋过的歌</h2>
        <h5>(排名不分先后)</h5>
        <ul>
          <li>Sippy Cup - <Singer>Melanie Martinez &#8226; Cry Baby</Singer></li>
          <li>Favours - <Singer>Brett &#8226; On Account of Your Love</Singer></li>
          <li>Best of Us - <Singer>Aquilo &#8226; Human EP</Singer></li>
          <li>Swimming in the Flood - <Singer>Passion Pit &#8226; Manners</Singer></li>
        </ul>
      </div>
    )
  }
}
