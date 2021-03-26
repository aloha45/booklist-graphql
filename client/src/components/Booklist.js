import React from "react";
import { getBooksQuery } from "../queries/queries";
import { graphql } from "@apollo/client/react/hoc";

const Booklist = (props) => {
	const displayBooks = () => {
		let data = props.data;
		if (data.loading) {
			return <div>Loading books...</div>;
		}
		return data.books.map((book) => {
			return <li key={book.id}>{book.name}</li>;
		});
	};
	return (
		<div>
			<ul id="book-list">{displayBooks()}</ul>
		</div>
	);
};

export default graphql(getBooksQuery)(Booklist);
