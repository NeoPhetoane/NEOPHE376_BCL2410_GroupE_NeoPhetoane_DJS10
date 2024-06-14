import { useState, useEffect } from "react";

function App() {
  const [setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsFromApi = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPostsFromApi();
  }, []);

  return <></>;
}

export default App;
