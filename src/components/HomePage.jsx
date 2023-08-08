import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import MarketPlace from './MarketPlace';
import Profile from './Profile';
import Dashboard from './Dashboard';

const Home =()=>{
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="marketplace" element={<MarketPlace />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </>
    )
}
export default Home