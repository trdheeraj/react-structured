import _ from 'lodash';
import React, {Component} from 'react';
import Section from './Section';
import Search from './Search';
import Category from './Category';
import ShowError from './ShowError';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        category: [],
        errors: [],
        size: 'fullscreen',
        open: false,
        column: null,
        direction: null
      }
      this.onSearch = this.onSearch.bind(this);
      this.handleSort = this.handleSort.bind(this);
      this.show = this.show.bind(this);
      this.close = this.close.bind(this);
  }

  componentWillMount(){
      fetch('http://localhost:8080/api/rest/categories?from=1&from_unit=days&to=0&to_unit=days', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => this.setState({category: json}));
  }

  search_errors(category_error){
    fetch(`http://localhost:8080/${category_error}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({errors: json}));
  }

  onSearch(updatedCategory) {
      this.setState({category: updatedCategory});
  }

  handleSort(clickedColumn) {
    const column = this.state.column;
    const category = this.state.category;
    const direction = this.state.direction;
    console.log(column);
    console.log(category);
    console.log(direction);
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        category: _.sortBy(category, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      category: category.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  show(open) {
    this.setState({ open: open });
  }

  close(close) {
    this.setState({ open: close });
  }

  render() {
    return(
      <div>
        <Section />
        <div className = "ui bottom attached active tab segment">
          <Search updateCategory = {(updatedCategory) => this.onSearch(updatedCategory)} />
          <div className = "ui horizontal divider">
    				All Errors
    			</div>
          <Category
            data = {this.state.category}
            show = {(open) => this.show(open)}
            listError = {(errorList) => this.search_errors(errorList)}
            onSort = {(clickedColumn) => this.handleSort(clickedColumn)}
            column = {this.state.column}
            direction = {this.state.direction}
          />
          <ShowError size = {this.state.size} open = {this.state.open} close = {(close) => this.close(close)} data = {this.state.errors}/>
        </div>
      </div>
    )
  }
}

export default App;
