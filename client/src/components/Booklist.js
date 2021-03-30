import React, { useState } from "react";
import { getBooksQuery } from "../queries/queries";
import { graphql } from "@apollo/client/react/hoc";
import BookDetails from "./BookDetails";

const Booklist = (props) => {
	const [selected, setSelected] = useState(null)
	const displayBooks = () => {
		let data = props.data;
		if (data.loading) {
			return <div>Loading books...</div>;
		}
		return data.books.map((book) => {
			return <li key={book.id} onClick={(e) => { setSelected(book.id)}}>{book.name}</li>;
		});
	};
	return (
		<div>
			<ul id="book-list">{displayBooks()}</ul>
			<BookDetails bookId={selected}/>
		</div>
	);
};

export default graphql(getBooksQuery)(Booklist);
