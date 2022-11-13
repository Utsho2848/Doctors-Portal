import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none font-bold uppercase">{children}</button>
    );
};

export default Button;