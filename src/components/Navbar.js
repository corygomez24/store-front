import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import logo from '../Traduality_Logo_2020.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm">
                {/* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk 
                */}
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand mr-auto" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <ul className="ml-auto nav navbar-nav">
                    <li className="nav-item">
                        <Link to='/cart'>
                            <button>
                                <i className="fas fa-cart-plus" />
                                My Cart
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <LoginButton />
                    </li>
                    <li className="nav-item">
                        <LogoutButton />
                    </li>
                    <li className="nav-item">
                        <Profile />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
