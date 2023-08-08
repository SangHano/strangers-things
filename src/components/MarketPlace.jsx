import { useEffect, useState } from "react";
const COHORT_NAME ='2306-FSA-ET-WEB-FT-SF'
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


const MarketPlace = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Result:', result);
      const data = result.data
      const posts = data.posts
      return posts;
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };console.log(posts)

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  if (error) {
    return (
      <>
        <h1>Welcome to Market</h1>
        <p>An error occurred: {error}</p>
      </>
    );
  }

  return (
    <>
      <h1>Welcome to Market</h1>
      {posts && Array.isArray(posts) && posts.map((post) => (

        <div key={post._id}>
            <h2>{post.title}</h2>
            <p>ID: {post._id}</p>
            <p>Location: {post.location}</p>
        </div>
        ))}

    </>
  );
};

export default MarketPlace;