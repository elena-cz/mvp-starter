import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
    <div>
    <h4> List Component </h4>
    There are { this.props.movies.length } movies.
    { this.props.movies.map(item => <ListItem item={item}/>)}
  </div>
  )}

};





export default List;