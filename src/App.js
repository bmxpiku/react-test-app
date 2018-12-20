import React, { Component } from 'react';
import Table from './table/Table.js';
import TableHeader from './table/TableHeader.js';
import Loader from './loader/Loader.js';
import FormContainer from './formContainer/FormContainer.js';
import './App.css';

class App extends Component {
  state = {
    tasks: [],
    title: '',
    selectValue: 1,
    nextElId: 4
  }

  generateId = () => {
    let newId = this.state.nextElId;
    newId++;
    this.setState({
      nextElId: newId
    });
    return newId;
  };

  onClickDone = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(el => (el.id === taskId ? Object.assign({}, el, { done: true }) : el))
    });
  }

  onClickIncrease = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(el => (el.id === taskId ? Object.assign({}, el, { counter: {done : el.counter.done + 1, planned: el.counter.planned} }) : el))
    });
  }

  onClickDelete = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(el => (el.id !== taskId))
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const el = {id: this.generateId(), title: event.target.title.value, counter: {done: 0, planned: event.target.selectValue.value}, done: false};
    this.setState({
      tasks: [el, ...this.state.tasks],
      title: '',
      selectValue: 1
    });
  }

  handleChange = (event) => {
    this.setState({
      selectValue: event.target.value
    });
  }
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  //here we could request base app state from some remote API, but for now:
  callApi = () => {
        return new Promise((resolve, reject) => {
          // debugger;
          const baseState = [
            {id: 1, title: 'task 1', counter: {done: 0, planned: 1}, done: false},
            {id: 2, title: 'task 2', counter: {done: 0, planned: 1}, done: false},
            {id: 3, title: 'task 3', counter: {done: 0, planned: 1}, done: false}
          ];
      resolve(baseState);
    });
  }

  componentDidMount() {
    this.callApi().then(response => {
      this.setState({
        tasks: response
      });
    })
  }

  render() {
    const {tasks} = this.state;
    if (Object.keys(tasks).length <= 0) {
      return (<Loader/>);
    }
    return (
      <div className={"divTable"}>
        <TableHeader/>
        <Table onClickDone={this.onClickDone} onClickIncrease={this.onClickIncrease} onClickDelete={this.onClickDelete} tasks={tasks}/>
        <FormContainer handleSubmit={this.handleSubmit} handleTitleChange={this.handleTitleChange} handleChange={this.handleChange} title={this.state.title} selectValue={this.state.selectValue}/>
      </div>

    );
  }
}

export default App;
