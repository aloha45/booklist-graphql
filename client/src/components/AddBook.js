import React, { useState } from "react";
import { getAuthorsQuery } from "../queries/queries";
import { graphql } from "@apollo/client/react/hoc";

const AddBook = (props) => {
	// const [name, setName] = useState("");
	// const [genre, setGenre] = useState("");
	// const [authorId, setAuthorId] = useState("");
	const [form, setForm] = useState({
		name: "",
		genre: "",
		authorId: "",
	});
	const updateField = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// let bookForm = {
		// 	name,
		// 	genre,
		// 	authorId,
		// };
		console.log(form.name, form.genre, form.authorId);
	};
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

	return (
		<React.Fragment>
			<form id="add-book" onSubmit={handleSubmit}>
				<div className="field">
					<label>Book name:</label>
					<input onChange={updateField} type="text" name="name" value={form.name}/>
				</div>
				<div className="field">
					<label>Genre:</label>
					<input onChange={updateField} type="text" name="genre" value={form.genre}/>
				</div>
				<div className="field">
					<label>Author:</label>
					<select name="authorId" value={form.authorId} onChange={updateField}>
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
