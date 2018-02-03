import React, { Component } from "react"
import ReactDOM from 'react-dom'

import styles from './browser-calories.css'

const CalorieType = {
  HTML: 'HTML',
  JS: 'JS',
  CSS: 'CSS',
  IMAGES: 'Images',
  FONTS: 'Fonts',
  ADS: 'Ads'
}
function Calorie(props) {
  let getCalorieType = (name) => {
    switch(name) {
      case 'html':
        return 'html'
      case 'css':
        return 'css'
      case 'js':
        return 'js'
      case 'images':
        return 'images'
      case 'fonts':
        return 'fonts'
      case 'ads':
        return 'ads'
      default:
        return 'default'
    }
  }

  return (
    <div
      className={`${styles.calorie} ${styles[getCalorieType(props.name)]}`}
      style = {{
        flex: props.value
      }}
    >
    </div>
  )
}

function CalorieBar(props) {
  let calories = props.calories
  return (
    <div className={styles['calorie-bar']}>
      {Object.keys(calories.components).map((key) => {
        return <Calorie key={key} name={key} value={calories.components[key]}/>
      })}
    </div>
  )
}

class InputComponent extends Component{
  constructor(props) {
    super(props)
    this.state={
      value: '',
      isActive: false
    }
  }

  focusHandler(event){
    this.setState({
      isActive: true
    })
  }

  blurHandler(event){
    if (!this.state.value) {
      this.setState({
        isActive: false
      })
    }
  }

  onChangeHandler(event) {
    this.setState({
      value: event.target.value
    })
    this.props.onChange(event.target.value)
  }

  render() {
    let {name} = this.props
    return (
      <div className={styles['input-wrapper']}>
        <label
          className={`${styles['input-label']} ${this.state.isActive && styles['input-label-active']}`}
        >
          {name}
        </label>
        <input
          className={styles['input']}
          id={name}
          type="number"
          name={name}
          onFocus={this.focusHandler.bind(this)}
          onBlur={this.blurHandler.bind(this)}
          onChange={this.onChangeHandler.bind(this)}
        />
      </div>
    )
  }

}

export default class BrowserCalories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTemplate: {},
      calorieBar: null
    }
    this.calories = {
      'name': 'Homepage',
      'budget': 800,
      'unit': 'KB',
      'components': {
        'html': 50,
        'css': 100,
        'js': 200,
        'images': 200,
        'fonts': 100,
        'ads': 0
      }
    }
  }

  onAddHandler(event) {
    console.log(this.state.newTemplate)
    let newTemplate = this.state.newTemplate
    let newCalorieBar = {
      'name': '',
      'budget': 0,
      'unit': 'KB',
      'components': {
        'html': newTemplate[CalorieType.HTML] || 0,
        'css': newTemplate[CalorieType.CSS] || 0,
        'js': newTemplate[CalorieType.JS] || 0,
        'images': newTemplate[CalorieType.IMAGES] || 0,
        'fonts': newTemplate[CalorieType.FONTS] || 0,
        'ads': newTemplate[CalorieType.ADS] || 0
      }
    }
    this.setState((prevState) => ({
      calorieBar: <CalorieBar calories={newCalorieBar}/>
    }))
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={`${styles.center}`}>
            <h2>Browser Calorie</h2>
            <p className={styles.intro}>前端性能优化就像理财。面对有限的资源需要一个合理的支出计划。使用Browser Calorie帮助你生成可视化的浏览器资源配置计划。</p>
            <div className={`${styles['new-template']}`}>
            {
              Object.keys(CalorieType).map((key) => {
                let type = CalorieType[key]
                return(
                  <InputComponent
                    key={type}
                    name={type} value={this.state.newTemplate[type]}
                    onChange={(value) => {
                      this.setState((prevSate) => ({
                        newTemplate: {
                          ...prevSate.newTemplate,
                          [type]: value
                        }
                      }))
                    }}/>
                  )
                }
              )
            }
            </div>
            <button className={styles.add} type="submit" onClick={this.onAddHandler.bind(this)}>添加</button>
          </div>
        </div>
        <div className={styles.right}>
          {this.state.calorieBar}
        </div>
      </div>

    )
  }
}

/**
References
https://codepen.io/ehermanson/pen/KwKWEv?q=form
**/
