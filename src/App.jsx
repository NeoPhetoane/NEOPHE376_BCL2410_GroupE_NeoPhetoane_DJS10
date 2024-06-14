//Imports react in order to use it.
import React, { useState, useEffect } from "react";

function App() {

  //state initialised to store the posts and error message
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

//Function that fetches data from the API
  useEffect(() => {
    const fetchPostsFromApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Data fetching failed.");
        }
        const data = await response.json();

        setPosts(data); // Updates state with fetched posts
      } catch (error) {
        setError(error.message); //Updates state with error message
      }
    };

    fetchPostsFromApi();
  }, []);  //  Empty dependency array

  return (
    <>
      <h1>Posts</h1>
      {/* Ternary operator that manages what displays on the page */}


      {error ? (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      ) : (
        <ol>
          {/* Itterates over the API data and looks within to find the id, title and body */}
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ol>
      )}
    </>
  );
}

//Exporting the function to main so it can display
export default App;
