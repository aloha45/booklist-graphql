import React from 'react';
import { gql } from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc'

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`

const Booklist = (props) => {
  console.log(props)
  return ( 
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
   );
}
 
export default graphql(getBooksQuery)(Booklist);