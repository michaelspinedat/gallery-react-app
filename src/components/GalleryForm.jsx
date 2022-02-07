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
        <form onSubmit={handleSubmit} className="px-3">
            <div className="mb-3">
                <label htmlFor="search" className="form-label">
                    Encuentra tus imágenes favoritas
                </label>

                <div className="input-group mb-3">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Home"
                        onChange={handleChange}
                        value={input}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                    >
                        Buscar
                    </button>
                </div>



            </div>
        </form>
    );
};

GalleryForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default GalleryForm;
