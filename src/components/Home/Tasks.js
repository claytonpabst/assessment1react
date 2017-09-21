import React, { Component } from 'react';
import {connect} from 'react-redux';
import {completeTask} from './../../ducks/tasks.js';
import {deleteTask} from './../../ducks/tasks.js';
import {getTasks} from '../../ducks/tasks.js';
import {Link} from 'react-router-dom';

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

    componentDidMount(){
        this.props.getTasks()
    }

    render() {
        console.log(this.props.tasks)
        
        let tasks = this.props.tasks.map( (task, i) => {
            let detailsID = `/details/${task.id}`

            return (
                <div key={i}>
                    <p style={task.completed ? {"textDecoration":"line-through"}: null}>{task.title}</p>
                    <button style={task.completed ? {"display":"none"}: null}onClick={ () => this.props.completeTask(i)}>complete</button>
                    <button onClick={ () => this.props.deleteTask(i)}>delete</button>
                    <Link to={detailsID}><button>details</button></Link>
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
    return {
        tasks: state.tasks,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {getTasks, completeTask, deleteTask})(Tasks);