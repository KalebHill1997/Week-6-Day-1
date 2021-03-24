import React, { Component } from 'react'
import Cary from './Cary'
import Charlotte from './Charlotte'
import Chicago from "./Chicago"
import Daily from "./Daily"
import ReactDOM from "react-dom"

export default class TheTime extends Component {
  constructor() {
    super()
    this.state = {
    }
  }


 tick = () => {
    const element = new Date().toLocaleTimeString()
    ReactDOM.render(element, document.getElementById('tick'));
  }

  render() {
    setInterval(this.tick(), 1000)
    return (
        <p id="tick"></p>
        // <div>
        //     <p>time22:{this.tick()}</p>
        // </div>
    )

  }
}