import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GalleryForm = ({ onSubmit }) => {

    const [input, setInput] = useState("");

    const handleChange = e => setInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();        
        onSubmit(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="search" className="form-label">
                    Encuentra tus imágenes favoritas
                </label>
                <input
                    type="search"
                    className="form-control"
                    id="search"
                    name="search"
                    placeholder="Buscar"
                    value={input}
                    onChange={handleChange}
                />
            </div>

        </form>
    );
};

GalleryForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default GalleryForm;
