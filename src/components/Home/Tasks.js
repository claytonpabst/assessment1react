import React, { Component } from 'react';
import {connect} from 'react-redux';
import {completeTask} from './../../ducks/tasks.js';
import {deleteTask} from './../../ducks/tasks.js';

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        
        this.completeTask = this.completeTask.bind(this);
    }

    completeTask(i){
        this.props.completeTask(i)
    }

    deleteTask(i){
        this.props.deleteTask(i)
    }

    render() {
        console.log(this.props)
        let tasks = this.props.taskList.map( (task, i) => {
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

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {completeTask, deleteTask})(Tasks);