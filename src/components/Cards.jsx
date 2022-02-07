import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ images }) => {

    return (
        <div className="d-flex justify-content-around flex-wrap mt-5">
            {images.map(img => (<Card key={img.id} img={img.url} />))}
        </div>
    );
};

Cards.propTypes = {
    images: PropTypes.array,
};

export default Cards;
