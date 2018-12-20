import React  from 'react';
import { Button } from 'react-bootstrap';

export default class Table extends React.Component {
  render() {
    return (
      this.props.tasks.map(task => {
        return (
          <div className={"divTableRow"} key={task.id}>
            <div className={"title divTableCell"}>
              {task.title}
            </div>
            <div className={"counter divTableCell"}>
              {task.counter.done}/{task.counter.planned}
            </div>
            <div className={"actions divTableCell"}>
              {!task.done ?
              <div>
                <Button bsstyle='warning' onClick={() => { this.props.onClickDone(task.id) }}>
                    Done
                  </Button>
                  <Button bsstyle='warning' onClick={() => { this.props.onClickIncrease(task.id) }}>
                  Increase Task Count
                  </Button>
              </div>
                :
                "Finished"
              }
              <Button bsstyle='warning' onClick={() => { this.props.onClickDelete(task.id) }}>
                Delete
              </Button>
            </div>
          </div>
        )
      })
    );
  }
}
