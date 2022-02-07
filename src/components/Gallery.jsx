import React, { useState } from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import Cards from './Cards';
import GalleryForm from './GalleryForm';

const Gallery = () => {
    const [search, setSearch] = useState("");
    const { data: images, loading } = useFetchImages(search);

    const handleFormSubmit = (input) => {
        console.log(input);
        setSearch(input);
    }

    return (
        <div className="container border">
            <h1>Gallery App</h1>
            <GalleryForm onSubmit={handleFormSubmit} />
            {loading && <p>Cargando...</p>}
            <Cards images={images} />
        </div>
    );
};

export default Gallery;
