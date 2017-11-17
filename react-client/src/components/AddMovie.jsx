import React from 'react';

class AddMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      title: e.target.value
    })
    console.log(this.state.title);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewMovie(this.state.title);

  }




  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input value={ this.state.title } onChange={ this.handleInput } />
        <button>Add</button>
      </form>
      


  )}
}




export default AddMovie;