import React from 'react';

const AppoinmentCard = ({ appointment }) => {
    const { name, img, description, bgFrom, bgTo } = appointment;
    return (
        <div className={`card card-side shadow-xl text-white px-8 
        lg:py-8 bg-gradient-to-r from-${bgFrom} to-${bgTo}`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppoinmentCard;