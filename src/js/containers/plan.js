import React, { Component } from "react"
import ReactDOM from 'react-dom'

import styles from './plan.css'

export default class Plan extends Component {
  render() {
    return (
      <div className={styles.center}>
        <h2>2018新年计划</h2>
        <ul className={styles.list}>
          <li>听完《薛兆丰的北大经济学课》</li>
          <li>听完《蒋勋细说红楼梦》</li>
          <li>看完《煮酒探西游》</li>
          <li>看完《金瓶梅》</li>
          <li>看完《三体》</li>
          <li><del>坚持一年不换手机</del>(列下计划的那一刻换手机的想法便愈发挥之不去，果断入手了X)</li>
        </ul>
      </div>
    )
  }
}
