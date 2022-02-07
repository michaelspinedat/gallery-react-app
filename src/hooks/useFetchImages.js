import { useEffect, useState } from 'react';
import { getImages } from '../helpers/getImages';

export const useFetchImages = (search) => {

    console.log("useFetch: ", search);

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getImages(search)
            .then(imgs => setState({ data: imgs, loading: false }));
    }, [search]);

    return state;
};
