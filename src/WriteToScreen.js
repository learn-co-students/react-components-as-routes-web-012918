import React from 'react'

export default class WriteToScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      value: 'something'
    }
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Write in input bar</h1>
        <input value={this.state.value} type='text' onChange={this.handleInput}/>
        <p>{this.state.value}</p>
      </div>
    )
  }
}
