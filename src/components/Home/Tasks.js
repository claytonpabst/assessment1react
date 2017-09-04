import React, { Component } from 'react';

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        
        // this.completeTask = this.completeTask.bind(this);
    }

    render() {
        let tasks = this.props.tasks.map( (task, i) => {
            return (
                <div key={i}>
                    <p style={task.checked ? {"textDecoration":"line-through"}: null}>{task.task}</p>
                    <button style={task.checked? {"display":"none"}: null}onClick={ () => this.props.completeTask(i)}>complete</button>
                    <button onClick={ () => this.props.deleteTask(i)}>delete</button>
                </div>
            )
        })

        return (
            <div>
                {tasks}
            </div>
        )
    }


 
}

export default Tasks