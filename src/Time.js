import React, { Component } from 'react'
import Timer from './Timer';

export default class Time extends Component {
    constructor(props){
        super(props)
        this.state ={
            timems:0,
            run:false
        }
 
        setInterval(()=>{
            if(this.state.run)
            this.setState({timems: this.state.timems+1000})
            },
        1000
        )
       }
     
    reset=()=>{
    this.setState({timems: 0,
    run:false})
    }
   change=()=>{
       this.setState({
           run: !this.state.run
       })
       
   }
  render() {
    return (
      
    <div className="border1">
        <div className="header"></div>
        <div  className="main">
        <Timer date={this.state.timems} />
        <div className="btn">
            <button className="btnstart" onClick={this.change}>{this.state.run?"Stop": "Start"}</button>
            <button className="btnreset" onClick={this.reset}>Reset</button>
        </div>
        </div>
        <div className="footer"></div>
    </div>
    )
  }
}
