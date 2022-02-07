import React, { useState } from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import Cards from './Cards';
import GalleryForm from './GalleryForm';
import Loading from './Loading';

const Gallery = () => {
    const [search, setSearch] = useState("");
    const { data: images, loading } = useFetchImages(search);

    const handleFormSubmit = (input) => {        
        setSearch(input);
    }

    return (
        <div className="container border mt-3">
            <h1 style={{textAlign: "center"}}>Gallery App</h1>
            <GalleryForm onSubmit={handleFormSubmit} />            
            {loading && <Loading />}
            <Cards className="mt-1" images={images} />
        </div>
    );
};

export default Gallery;
