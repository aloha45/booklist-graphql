import React from "react";
import Booklist from "./components/Booklist";
import { ApolloClient, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div id="main">
				<h1>Cory's Reading List</h1>
				<Booklist />
			</div>
		</ApolloProvider>
	);
}

export default App;
