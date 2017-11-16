import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';


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
      displayedMovies: [],
      query: '',
      filter: 'SHOW_ALL'
    };

    this.handleSearch = this.handleSearch.bind(this); 
    this.filterMovies = this.filterMovies.bind(this);


  }


  handleSearch(term) {
    // do something
    // this.setState({ query: term, filter: 'SEARCHED' });
    this.filterMovies('SEARCHED', term);
   
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

  componentDidMount() {

    this.filterMovies('SHOW_ALL');


    // this.filterMovies();
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  }

  render () {
    return (
    <div>

      <p> Search term { this.state.query } </p>
      <Search handleSearch={ this.handleSearch } />  
      <h1>Item List</h1>
      <List movies={ this.state.displayedMovies } />
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
