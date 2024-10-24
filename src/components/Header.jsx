import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import Menu from './Menu.jsx';
import MyOrder from '../containers/MyOrder';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [toogleOrders, setToggleOrders] = useState(false);
    const {state:{cart}}=useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return(
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/Store">All</a>
                    </li>
                    <li>
                        <a href="/Store">Clothes</a>
                    </li>
                    <li>
                        <a href="/Store">Electronics</a>
                    </li>
                    <li>
                        <a href="/Store">Furnitures</a>
                    </li>
                    <li>
                        <a href="/Store">Shoes</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        store@example.com
                    </li>
                    <li 
                        className="navbar-shopping-cart" 
                        onClick={() => setToggleOrders(!toogleOrders)}
                    >
                        <img src={shoppingCart} alt="shopping cart" />
                        {cart.length > 0 ? <div>{cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toogleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;