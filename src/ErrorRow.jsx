import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class ErrorRow extends Component {
    render() {
      return(
        <Table.Row>
          <Table.Cell>
            {this.props.data.username}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.contextId}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.timestamp}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.browser}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.stackTrace}
          </Table.Cell>
        </Table.Row>
      )
    }
}

export default ErrorRow;
