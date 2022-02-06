export const getImages = async () => {
    const res = await fetch("https://api.unsplash.com/photos/?client_id=8mYNdpePnEU0nniWT8Do-ELMhHT80lNtPHWSg7iE_4A");
    const data = await res.json();
    return data.map(img => ({ id: img.id, url: img.urls.regular }));
};
