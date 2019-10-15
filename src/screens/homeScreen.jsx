import React from 'react'
import dataArray from '../data';

const renderData = () => {
    return dataArray.map((card,index) => {
        return (
            <li key={index} className="row card text-justify border shadow m-4 p-4 bg-white rounded d-flex justify-content-between">
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.variety}</p>
                    <h6 className="card-text">{card.notes}</h6>
                    
                </div>
            </li>
        )
    })
}

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="row">
                {renderData()}
            </div>
        </div>
        
    )
}

export default Home
