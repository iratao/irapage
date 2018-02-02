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
    // this.label && this.label.classList.add(styles['input-label-active'])
  }

  blurHandler(event){
    if (!this.state.value) {
      this.setState({
        isActive: false
      })
    }
    // this.label && this.label.classList.remove(styles['input-label-active'])
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
      calorieBars: []
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
      calorieBars: prevState.calorieBars.concat(<CalorieBar key={prevState.calorieBars.length} calories={newCalorieBar}/>)
    }))
  }

  render() {
    return (
      <div>
        <div className={`${styles['new-template']} ${styles.center}`}>
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
          <button className={styles.add} type="submit" onClick={this.onAddHandler.bind(this)}>添加</button>
          {this.state.calorieBars}
        </div>
      </div>

    )
  }
}

/**
References
https://codepen.io/ehermanson/pen/KwKWEv?q=form
**/
