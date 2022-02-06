import React, { useEffect } from 'react';
import { getImages } from '../helpers/getImages';
import { useFetchImages } from '../hooks/useFetchImages';
import Cards from './Cards';

const Gallery = () => {
    console.log("Gallery component");
    const { data: images, loading } = useFetchImages();

    return (
        <div className="container border">
            <h1>Gallery App</h1>

            {loading && <p>Cargando...</p>}

            <Cards images={images} />
        </div>
    );
};

export default Gallery;
