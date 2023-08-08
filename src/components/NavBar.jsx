import {Link } from 'react-router-dom'

const NavBar = ()=>{
    return(
        <>
            <div>
                <p>
                    <Link to ="/home">Home</Link> <Link to="/home/marketplace">MarketPlace</Link>   <Link to ="/home/profile">Profile</Link>
                </p>
            </div>
        </>

    )
}
export default NavBar