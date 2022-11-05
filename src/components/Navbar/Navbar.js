import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo512.png';
import auth from '../Firebase/Firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logoutUser = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };

    const myNavbar = (
    <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/purchase">Purchase</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    {user && <li><Link to="/dashboard">Dashboard</Link></li>}
    {user && <li><Link to="/addReview">Add Review</Link></li>}
    <li><Link to="/contact">Contact</Link></li>
    </>
    );
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex="0" className="btn drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {myNavbar}
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl text-blue-500 uppercase"> 
                <img className='w-16' src={logo} alt="" /> 
                <span className='hidden lg:flex'>daisyTools</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0"> {myNavbar}</ul>
            </div>
            <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden" > 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
            </label>

            <div className="navbar-end">
            { user && <div className='flex justify-end'>
                <p className='text-green-500 p-2'>{user?.displayName?.slice(0, 6)}</p> <img className='w-12 rounded-full' src="https://i.ibb.co/k9T3tDW/lash.jpg" alt='' />
            </div> }
            { user ? <button onClick={logoutUser}>Signout</button> : <Link to="/login">Login</Link>}
            
            </div>
            </div>
    );
};

export default Navbar;