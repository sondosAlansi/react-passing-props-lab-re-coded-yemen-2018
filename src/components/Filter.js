import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();

    const Filter = ({ filters, handleChange }) =>
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>;
       this.state = {
        filters: []
      };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

  render() {
    return (
      <select onChange={this.props.handleChange} defaultValue='all'>
          <option value='all'>All</option>
          {this.state.filters.map(filter =>
            <option key={filter} value={filter}>{filter}</option>
          )}
        </select>
    );
  }
}
Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
};
export default Filter;
