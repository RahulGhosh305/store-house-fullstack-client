import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import  logo from '../../image/logo1.png';
import { UserContext } from '../../App';


const Header = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const History = useHistory()
    const loginHandle = () => {
        History.push('/login')
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home"><img src={logo} alt=""/></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/order">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deals">Deals</Link>
                        </li>
                        <li>
                            {
                                loggedInUser.email ? <img src={loggedInUser.photoURL} alt="" className="rounded-circle" style={{width: '40px'}}/> :
                                <button onClick={loginHandle} className="btn btn-success ml-3 my-sm-0" type="submit">Login</button>
                            }
                        </li>
                    </ul>
                </div>
            </nav>

            {   props.search === 'true' &&
                <form className="form-inline my-4 justify-content-center">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Product" aria-label="Search"/>
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            }
        </div>
    );
};

export default Header;