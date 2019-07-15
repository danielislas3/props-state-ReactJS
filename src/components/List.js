import React, { Component } from 'react'
import ListElement from './ListElement'



export default class list extends Component {
  state={
    count:0
    }
    contador=()=>{
      this.setState(prevStare=>{
        return { count: (prevStare.count+=1)}})

    }
    contador2=()=>{
      if (this.prevStare>=0){

        this.setState(prevStare=>{
          return {count: (prevStare.count-=1)}
        })
      }

    }
    inputChange=event=>{
      this.setState({
        text: event.target.value
      })
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.contador}>+</button>
        <button onClick={this.contador2}>-</button>

        <hr/>

        <input 
        type="text"
        onChange={this.inputChange}
        value={this.state.text}
        />

        <small>{this.state.text}</small>

      </div>
    )
  }
}

