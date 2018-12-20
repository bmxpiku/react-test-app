import React, { Component } from 'react';

export default class Table extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input name={"title"} value={this.props.title} type={"text"} placeholder={"Task Name"} onChange={this.props.handleTitleChange}/>
        <select name={"selectValue"} value={this.props.selectValue} onChange={this.props.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
