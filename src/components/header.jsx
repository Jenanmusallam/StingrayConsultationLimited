import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<>
    <header>
        <div>
        <Link to="/"><img src="../Image/Logo.png" class="logoImg" alt="Logo"/></Link>
        </div>
        <div class="header-right">
            <Link to="/">Login</Link>
            <Link to="/book">Book</Link>
            <Link to="/ticket">Ticket</Link> 
            <Link to="/tickets">Ticket All</Link> 
        </div>
    </header>
    </>)
}

export default Header;