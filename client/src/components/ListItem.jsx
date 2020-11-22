import React from 'react';
// form should work throughout the app because of the class extension.


const ItemList = (props) => (
  // puts items in a list with name and quantity being keys
  // will have values for keys filled in with form if I follow correctly.
  <li>
      item: {props.item.name} {props.item.quantity}
     </li>

)

export default ItemList
