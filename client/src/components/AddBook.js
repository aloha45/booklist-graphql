import React, { useState } from "react";
import { getAuthorsQuery } from "../queries/queries";
import { graphql } from "@apollo/client/react/hoc";

const AddBook = (props) => {
	const [name, setName] = useState("");
	const [genre, setGenre] = useState("");
	const [authorId, setAuthorId] = useState("");
	// const [form, setForm] = useState({
	// 	name: "",
	// 	genre: "",
	// 	authorId: "",
	// });
	const displayAuthors = () => {
		let data = props.data;
		if (data.loading) {
			return <option disabled>Loading authors...</option>;
		}
		return data.authors.map((author) => {
			return (
				<option key={author.id} value={author.id}>
					{author.name}
				</option>
			);
		});
	};

    const handleSubmit = e => 
			e.preventDefault();
      let bookForm = {
        name, genre, authorId
      }
			console.log(bookForm);


	return (
		<React.Fragment>
			<form id="add-book" onSubmit={handleSubmit}>
				<div className="field">
					<label>Book name:</label>
					<input
						onChange={(e) => setName({ name: e.target.value })}
						type="text"
					/>
				</div>
				<div className="field">
					<label>Genre:</label>
					<input
						onChange={(e) => setGenre({ genre: e.target.value })}
						type="text"
					/>
				</div>
				<div className="field">
					<label>Author:</label>
					<select onChange={(e) => setAuthorId({ authorId: e.target.value })}>
						<option>Select Author</option>
						{displayAuthors()}
					</select>
				</div>
				<button>+</button>
			</form>
		</React.Fragment>
	);
};

export default graphql(getAuthorsQuery)(AddBook);
