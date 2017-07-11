import React, { Component } from 'react';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: ['Finish React Test',
                'Do This',
                'Do That'
                ],
      input: ''
    } 

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({
      taskList: [...this.state.taskList, this.state.input],
      input: ''
    })
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {

    const taskList = this.state.taskList.map( (task, index) => {
      return (
        <p key={index}>{task}</p>
      )
    })

    const styles = {
      color: 'white'
    }

    return (
      <div className="Home">
        <div className="main">
          <header className="header">
            To Do List
          </header>
          <div className="input">
            <div className="inputInner">
              <input 
                placeholder="Enter a new task" 
                value={ this.state.input } 
                onChange={ this.handleInputChange }
              />
              <button onClick={ this.handleClick }>Add to list</button>
            </div>
          </div>
          <div style={styles}>
            { taskList }
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>  
      </div>
    );
  }

}


export default Home;