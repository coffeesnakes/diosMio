import React from 'react';
import Header from './Header.jsx'
import ListItem from './ListItem.jsx'
// takes in imported ListItem and returns a mapped version of the list.
// .map will give indexes
 const List = (props) => (
   //className groceries will allow that class reference in the main App.jsx component
   // so there's a path for this 'List' component after mapping items with indexes.
<div className="groceries">
  {props.list.map(item, index) =>
<ListItem item={item} key={index}/>}
</div>
 )
 //one line arrow statement auto returns and is put into list@ListItem

 export default List;









