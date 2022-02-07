import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ img }) => {
    return (
        <div className="card" style={{ width: "18rem", height: "18rem" }}>
            <img src={img} className="card-img-top" style={{ height: "100%", objectFit: "cover" }} alt="" />
        </div>
    );
};

Card.propTypes = {
    img: PropTypes.string,
};

export default Card;