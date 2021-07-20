import React from 'react'

function Header() {
    return (
        <div className="header">
        <Link to="/">
            <img className="header__logo" src="https://raw.githubusercontent.com/coderkabh/amazon-clone/master/src/just-Buy-It.png?token=AKL6VWGG5TKLMZXXYMPJ4YTAWYBAA"/>
        </Link>

        <div className="header__search">
            <input className="header__searchInput" placeholder="Write what's in your mind today..." type="text"/>
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">
            <Link to={!user && './login'}>
                <div className="header__option" onClick={handleAuthentication}>
                    <span className="header__optionLineOne">Hello, {user ? user.email : '' }</span>
                    <span className="header__optionLineTwo">{user? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>
            <Link to="/customer-support">
                <div className="header__option">
                    <span className="header__optionLineOne">Customer Care</span>
                    <span className="header__optionLineTwo">24x7</span>
                </div>
            </Link>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingCart/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>

    </div>
    )
}

export default Header