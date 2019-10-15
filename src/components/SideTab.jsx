import React from 'react';
import './sideTab.css';

const SideTab = () => {
    return (
        <div className="sidebar">
            <a href="/" className="active">Home</a>
            <a href="/help" className="">Help</a>   
        </div>
    )
}

export default SideTab;