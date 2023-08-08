import { useLocation } from 'react-router-dom';

const Dashboard =()=>{
    const location = useLocation();
    const email = location.state?.email || 'No email provided';
    return (
        <>
            <h1>Welcome To Shop Shop</h1>
            <p>Customer: {email}</p>
        </>
    )
}
export default Dashboard