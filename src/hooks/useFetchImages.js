import React, { useEffect, useState } from 'react';
import { getImages } from '../helpers/getImages';

export const useFetchImages = () => {

    console.log("custom hook");

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getImages()
            .then(imgs => setState({ data: imgs, loading: false }));
    }, []);

    return state;
};
