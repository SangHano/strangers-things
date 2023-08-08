import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import MarketPlace from './MarketPlace';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Post from './Post'
import PostDetail from './PostDetail'

const Home =()=>{
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="marketplace" element={<MarketPlace />}>
                    <Route path="create" element={<Post />} />
                    <Route path="post/:posts_id" element={<PostDetail />} />
                </Route>
                <Route path="profile" element={<Profile />} />
            </Routes>
        </>
    )
}
export default Home