import { Link } from 'react-router-dom';
import '../assets/css/Nav.css';


const Nav = () => {
    return (
        <>
            <div className='nav'>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contacts</Link></li>
                    <li><Link to="./Login_SignUp">Login</Link></li>
                    
                </ul>
            </div>  
        </>
    )
}

export default Nav;