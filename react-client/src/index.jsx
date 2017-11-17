import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovies: [
        {title: 'Bridget Jones\'s Diary'},
        {title: 'Boyhood'},
        {title: 'Moonlight'},
        {title: 'Amelie', user_added: true },
        {title: 'Dunkirk'}
      ],
      displayedMovies: []
    };

    this.filterMovies = this.filterMovies.bind(this);
    this.search = this.search.bind(this); 
    this.addNewMovie = this.addNewMovie.bind(this); 


  }

  filterMovies(filter, query) {

    var { allMovies, displayedMovies } = this.state;

    var filtered = [];

    if (filter === 'SHOW_ALL') {
      filtered = allMovies;
    } 

    if (filter === 'SEARCHED') {
      filtered = allMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(query.toLowerCase());
      });
    } 

    if (filter === 'USER_ADDED') {
      filtered = allMovies.filter((movie) => {
        return !!movie.user_added;
      });
    }

    this.setState({ displayedMovies: filtered });

  }

  search(term) {
    this.filterMovies('SEARCHED', term);
  }

  addNewMovie(title) {
    this.setState({
      allMovies: this.state.allMovies.push({
        title: title,
        user_added: true
      })
    })

    $.ajax({
      url: `/movies?title=${title}`,
      method: 'POST',
      success: (result) => {
        console.log('Success!', result);
      },
      error: (error) => {
        console.log('Error!', error);
      }
    })


  }


  componentDidMount() {

    $.ajax({
      url: '/movies',
      success: (data) => {
        this.setState({
          allMovies: data,
          displayedMovies: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

  render () {
    return (
    <div>

      <Search search={ this.search } />
      <br />
      <AddMovie addNewMovie={ this.addNewMovie } />  
      <h1>Item List</h1>
      <List movies={ this.state.displayedMovies } />
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
