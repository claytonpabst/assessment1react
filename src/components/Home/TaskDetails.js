import React, { Component } from 'react';
import {connect} from 'react-redux';
import {completeTask} from './../../ducks/tasks.js';
import {deleteTask} from './../../ducks/tasks.js';
import {Link} from 'react-router-dom';
import {getTasks} from '../../ducks/tasks.js';
import {updateTask} from '../../ducks/tasks.js';

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updateInputsVisible:false,
            titleInput: '',
            descriptionInput: ''
        }

        this.showUpdateInputs = this.showUpdateInputs.bind(this);
        this.hideUpdateInputs = this.hideUpdateInputs.bind(this);
        this.titleInput = this.titleInput.bind(this);
        this.descriptionInput = this.descriptionInput.bind(this);
        this.updateTask = this.updateTask.bind(this);

    }

    componentDidMount(){
        this.props.getTasks()
    }

    showUpdateInputs(){
        this.setState({
            updateInputsVisible: true
        })
    }
    hideUpdateInputs(){
        this.setState({
            updateInputsVisible: false,
            titleInput: '',
            descriptionInput: ''
        })
    }

    titleInput(e){
        this.setState({
            titleInput: e.target.value
        })
    }

    descriptionInput(e){
        this.setState({
            descriptionInput: e.target.value
        })
    }

    updateTask(){
        console.log(this.props)
        this.props.updateTask(this.props.match.params.id, this.state.titleInput, this.state.descriptionInput)
        // return window.location="/"
    }

    render() {

        let detailsOfTask = 'Nothing to display'
        let indexOfTask = 0;
        let tasks = this.props.tasks
        for(let i=0; i<tasks.length; i++){
            if(tasks[i].id == this.props.match.params.id){
                indexOfTask = i
            }
        }

        if(tasks.length>0){
            detailsOfTask =
                (
                    <div>
                        <h1>Task: {tasks[indexOfTask].title}</h1>
                        <h1>Task Description: {tasks[indexOfTask].description}</h1>
                        <h1>{tasks[indexOfTask].completed ? 'This task is done.': 'This task has not been completed.'}</h1>
                    </div>
                )
            
        }

        return (
            <section>
                {detailsOfTask}
                <Link to='/'><button>Back to tasks</button></Link>
                <button onClick={this.showUpdateInputs}>Update Task</button>
                <div style={this.state.updateInputsVisible ? null : {"display":"none"}}>
                    Update Title:<input value={this.state.titleInput} onChange={ (e) => this.titleInput(e)} type="text"/>
                    <br/>
                    Update Description:<input value={this.state.descriptionInput} onChange={ (e) => this.descriptionInput(e)} type="text"/>
                    <br/>
                    <button onClick={this.hideUpdateInputs}>Cancel Update</button>
                    <Link to='/'><button onClick={this.updateTask}>Finalize Update</button></Link>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {getTasks, updateTask})(Tasks);