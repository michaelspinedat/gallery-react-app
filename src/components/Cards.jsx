import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ images }) => {
    console.log("Component: Cards");
    return (
        <>
            {images.map(img => (<Card key={img.id} img={img.url} />))}
        </>
    );
};

Cards.propTypes = {
    images: PropTypes.array,
};

export default Cards;
