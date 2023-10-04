

export const getImg = (images) =>{

    const imgUrls = images ? images.map(({url}) => url) : null;
    const img = imgUrls ? imgUrls[0] : null;

    return img;
}