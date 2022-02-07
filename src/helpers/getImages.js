export const getImages = async (search) => {
    const query = search || "random";
    const key = "8mYNdpePnEU0nniWT8Do-ELMhHT80lNtPHWSg7iE_4A";
    const url = `https://api.unsplash.com/search/photos/?query=${encodeURI(query)}&client_id=${key}`;
    
    const res = await fetch(url);
    const { results } = await res.json();
    return results.map(img => ({ id: img.id, url: img.urls.regular }));
};
