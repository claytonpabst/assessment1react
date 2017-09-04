import React, { Component } from 'react';
import Tasks from './Tasks.js'
import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [
                  {task:'Finish React Test', checked: false},
                  {task:'Do This', checked: false},
                  {task:'Do That', checked: false}
                ],
      input: ''
    } 

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

  }

  completeTask(i) {
    let taskList = [...this.state.taskList]
    taskList[i].checked = true;
    this.setState({
      taskList: taskList
    })
  }

  deleteTask(i) {
    let taskList = [...this.state.taskList]
    taskList.splice(i, 1)
    this.setState({
      taskList: taskList
    })
  }

  handleClick() {
    if(this.state.input === '') {
      return
    }
      let taskList = [... this.state.taskList]
      taskList.push({task: this.state.input, checked: false})
    this.setState({
      taskList: taskList,
      input: ''
    })
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {

    // const taskList = this.state.taskList.map( (task, index) => {
    //   return (
    //     <p key={index}><Tasks tasks={this.state.taskList}/></p>
    //   )
    // })

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
            {/*{ taskList }*/}
            <Tasks tasks={this.state.taskList} deleteTask={this.deleteTask} completeTask={this.completeTask}/>
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