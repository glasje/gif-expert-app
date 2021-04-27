import React from 'react'
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">cargando...</p>}
            { <div className="card_grid animate__animated animate__fadeIn">


                {images.map((img) => (

                    <GifGridItem
                        key={img.id}
                        {...img} />


                ))}

            </div>}
        </>

    )
}

GifGrid.protoType = {
    category: PropTypes.string.isRequired
}
