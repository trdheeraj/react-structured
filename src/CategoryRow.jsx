import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class CategoryRow extends Component {
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
    }

    show(key){
        this.props.show(true);
        this.props.listError(key);
    }

    render() {
      return(
        <Table.Row onClick = {() => this.show(this.props.data.links.errors)}>
          <Table.Cell>
            {this.props.data.description}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.source}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.errorCount}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.type}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.userCount}
          </Table.Cell>
        </Table.Row>
      )
    }
}

export default CategoryRow;
