import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

  const [{ basket }] = useStateValue()
    return (
        <nav className="header">
            <Link to="/">
              <img 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                className="header__logo"
                alt="" 
              />
            </Link>
            <div className="header__search">
              <input className="header__searchInput" type="text" />
              <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
              <Link to="/login" className="header__link">
                <div className="header__option">
                <span className="headerOptionLine1">Hello</span>
                <span className="headerOptionLine2">Sign In</span>
                </div>
              </Link>
              <Link to="/" className="header__link">
                <div className="header__option">
                <span className="headerOptionLine1">Returns</span>
                <span className="headerOptionLine2">& orders</span>
                </div>
              </Link>
              <Link to="/" className="header__link">
                <div className="header__option">
                <span className="headerOptionLine1">Your</span>
                <span className="headerOptionLine2">Prime</span>
                </div>
              </Link>
              <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                    <span className="headerOptionLine2 header__basketCount">{basket?.length} </span>
                </div>
              </Link>
            </div>
        </nav>
    )
}

export default Header
