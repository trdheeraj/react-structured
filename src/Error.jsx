import React, { Component } from 'react';
import ErrorRow from './ErrorRow';
import { Table } from 'semantic-ui-react';

class Error extends Component {
    render() {
      return(
        <Table inverted selectable fixed>
          <Table.Header>
            <Table.Row>
               <Table.HeaderCell singleLine = {false} >UserName</Table.HeaderCell>
               <Table.HeaderCell singleLine = {false} >Context Id</Table.HeaderCell>
               <Table.HeaderCell>TimeStamp</Table.HeaderCell>
               <Table.HeaderCell>Browser</Table.HeaderCell>
               <Table.HeaderCell singleLine = {false} width = {6} >Stack Trace</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              this.props.data.map(error => {
                return <ErrorRow key = {error.id} data = {error} />
              })
            }
          </Table.Body>
        </Table>
      )
    }
}

export default Error;
