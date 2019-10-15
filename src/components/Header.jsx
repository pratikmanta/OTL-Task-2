import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-dark text-light">
            <div className="row d-flex align-self-center">
                <h3 className="col">
                    <img src="https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg" width="70" height="70" alt="avatar" className="rounded-circle"/>
                </h3>
                <div className="row d-flex align-self-center">
                    <a href="/"><h2 className="text-secondary ml-2 mr-1">Home</h2></a>
                    <a href="/help"><h2 className="text-secondary ml-2 pl-2">Help</h2></a>
                </div>
            </div>
        </nav>
    )
    
}

export default Header;
