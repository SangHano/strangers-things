import { useState, useEffect } from 'react'
import {Link, Outlet} from 'react-router-dom'


const COHORT_NAME ='2306-FSA-ET-WEB-FT-SF'
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const MarketPlace = ()=>{
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const response = await fetch(`${API_URL}/posts`)
                const data = await response.json()
                console.log('Data from API:', data.data.posts); 
                setPosts(data.data.posts) 
            } catch(error) {
                console.error('Error fetching posts:', error) 
            }
        }
        fetchAllPosts();
    }, []);  

    //Delete Post here
    const handleDelete = (id) => {
        console.log(`Deleting post ${id}`);
        const remainingPosts = posts.filter(post => post._id !== id)
        setPosts(remainingPosts)
    }

    return (
        <>
            <h3>List of Posts</h3>
            <Link to="create">
            <button>Create Post</button>
            </Link>
            <Outlet /> 
            {posts && posts.length > 0 && posts.map(post => (
                <div key={post._id}>
                <h2>{post.title}</h2>
                <p>Price: {post.price}</p>
                <p>Location: {post.location}</p>
                <Link to={`/post/${post._id}`}>See Details</Link>
                <button className="delete-button" onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
          ))}
        </>
      )
    }
    
export default MarketPlace;