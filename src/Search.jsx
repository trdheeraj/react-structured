import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
        category: '',
        from: 1,
        from_unit: 'days',
        to: 0,
        to_unit: 'days'
      }
      this.search_categories = this.search_categories.bind(this);
  }

  search_categories(){
    fetch(`http://localhost:8080/api/rest/categories?from=${this.state.from}&from_unit=${this.state.from_unit}&to=${this.state.to}&to_unit=${this.state.to_unit}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.props.updateCategory(json));
  }

  updateFromValue(fromValue) {
      this.setState({from: fromValue});
  }

  updateToValue(toValue) {
      this.setState({to: toValue});
  }

  unit_selection(unitValue) {
      this.setState({from_unit: unitValue, to_unit: unitValue});
  }

  render() {
    return (
      <div>
        <table className = "ui inverted violet table">
          <tbody className = "center">
            <tr className = "center aligned">
              <td className = "right aligned">
                View Errors From:
                <div className = "ui action input center">
                  <input type = "text" id = "from" placeholder = "From" onChange = {event => this.updateFromValue(event.target.value)} value = {this.state.from} />
                  <select className = "ui compact dropdown" id = "from_unit" onChange = {event => this.unit_selection(event.target.value)} value = {this.state.from_unit}>
                    <option value = "days">Days</option>
                    <option value = "hours">Hours</option>
                    <option value = "minutes">Minutes</option>
                  </select>
                </div>
              </td>
              <td className = "left aligned">
                To:
                <div className = "ui action input center">
                  <input type = "text" id = "to" placeholder = "To" onChange = {event => this.updateToValue(event.target.value)} value = {this.state.to} />
                  <select className = "ui compact dropdown" id = "to_unit" onChange = {event => this.unit_selection(event.target.value)} value = {this.state.from_unit}>
                    <option value = "days">Days</option>
                    <option value = "hours">Hours</option>
                    <option value = "minutes">Minutes</option>
                  </select>
                  <div className = "ui button" onClick = {() => this.search_categories()}>Search</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Search;
