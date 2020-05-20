import React from 'react'
import './image-item.scss';

const ImageItem = ({image,onToggleOuter}) => {

    const { url, id } = image

    return (
        <div className="image-gallery__item image-item" onClick={() => onToggleOuter(id)}>
            <img src={url} alt={`Image with id ${id}`}/>
        </div>
    )
}

export default ImageItem