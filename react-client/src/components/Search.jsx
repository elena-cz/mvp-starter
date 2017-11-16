import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {

    this.setState({ query: e.target.value });
    console.log('typing' + this.state.query);

  }

  handleSubmit(e) {

    e.preventDefault();
    console.log('hanlding submit');
    console.log('props in handleSubmit', this.props);
    this.props.handleSearch(this.state.query);

  }

  render() {

    return (

    <form onSubmit={ this.handleSubmit } >
      <input  type="text" 
              onChange={ this.handleChange }
              value={ this.state.query } 
      ></input>
      <button>Search</button>
    </form>
  
  )}


};


export default Search;