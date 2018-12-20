import React, { Component } from 'react';

export default class TableHeader extends Component {
  render() {
    return (
      <div className={"divTableHeading"}>
        <div className="divTableRow">
          <div className="divTableHead">Task name</div>
          <div className="divTableHead">Status (done/planned)</div>
          <div className="divTableHead">Controls</div>
        </div>
      </div>
    );
  }
}
