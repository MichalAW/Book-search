import React from "react";

import Search from "./Search";

import "../sass/style.scss";

function App() {

	return (
		<section>
			<h1>BOOK SEARCH ENGINE!</h1>
				<p>Find book on
					<a href='https://books.google.pl/'> google books</a>
				</p>
					<p>Press ENTER to see more books</p>
				<Search/>
		</section>
	);
};

export default App;