import React, { Component } from 'react';
import Error from './Error';
import { Modal } from 'semantic-ui-react';

class ShowError extends Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close(){
        this.props.close(false);
    }

    render() {
      return(
        <Modal size={this.props.size} open={this.props.open} onClose={() => this.close()}>
          <Modal.Header>
            Errors
          </Modal.Header>
          <Modal.Content>
            <Error data = {this.props.data} />
          </Modal.Content>
        </Modal>
      )
    }
}

export default ShowError;
