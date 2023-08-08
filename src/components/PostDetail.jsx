import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const COHORT_NAME ='2306-FSA-ET-WEB-FT-SF'
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const PostDetail = ()=> {
  const { posts_id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`${API_URL}/posts/${posts_id}`);
      const data = await response.json();
      setPost(data.post);  
    }

    fetchPost();
  }, [posts_id]);

  return post ? (
    <div>
      <h2>Post Details</h2>
      <p>Title: {post.title}</p>
      <p>Description: {post.description}</p>

    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default PostDetail;