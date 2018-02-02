import React, { Component } from "react"
import ReactDOM from 'react-dom'

import styles from './video.css'

export default class Video extends Component {
  render() {
    return (
      <div>
        <p>最近我觉得很有趣的视频</p>
        <iframe
          className={styles.center}
          src="https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=5ee1c0923e0e534298242b280344a5b2&tvId=861546400&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%"
          frameBorder="0"
          allowFullScreen="true"
          width="50%"
          height="50%">
        </iframe>
      </div>
    )
  }
}
