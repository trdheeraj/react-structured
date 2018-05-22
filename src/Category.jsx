import React, { Component } from 'react';
import CategoryRow from './CategoryRow';
import { Table } from 'semantic-ui-react';

class Category extends Component {
    render() {
      return(
        <Table sortable inverted selectable fixed>
          <Table.Header>
            <Table.Row>
               <Table.HeaderCell singleLine = {false} width = {6}>Description</Table.HeaderCell>
               <Table.HeaderCell singleLine = {false} width = {6}>Source</Table.HeaderCell>
               <Table.HeaderCell sortable = { this.props.column === 'errorCount' ? this.props.direction : null } onClick = {(clickedColumn) => this.props.onSort('errors')}>Errors</Table.HeaderCell>
               <Table.HeaderCell sortable = { this.props.column === 'type' ? this.props.direction : null } onClick = {(clickedColumn) => this.props.onSort('type')}>Type</Table.HeaderCell>
               <Table.HeaderCell sortable = { this.props.column === 'userCount' ? this.props.direction : null } onClick = {(clickedColumn) => this.props.onSort('userCount')}>Distinct Users</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              this.props.data.map(category => {
                return <CategoryRow key = {category.links.errors} data = {category} show = {(open) => this.props.show(open)} listError = {(errorList) => this.props.listError(errorList)}/>
              })
            }
          </Table.Body>
        </Table>
      )
    }
}

export default Category;
