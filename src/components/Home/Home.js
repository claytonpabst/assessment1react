import React, { Component } from 'react';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);

    this.setState = {
      taskList: ['Finish React Test'],
      input: ''
    }  
  }

  render() {
    return (
      <div className="Home">
        <div className="main">
          <header className="header">
            To Do List
          </header>
          <div>
            
          </div>
        </div>  
      </div>
    );
  }

}


export default Home;