import React, {useEffect, useState} from 'react'
import GifGridItem from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'
import { useFecthGifs } from '../hooks/useFetchGifs'

const GiftGrid = ({categoria, setCategoria}) => {

    // const [images, setImages] = useState([])

    // useEffect( () => {
    //     getGifs(categoria).then(
    //         img => setImages(img)
    //     )
    // }, [categoria])

    const {data:images, loading} = useFecthGifs(categoria)

    return (
        <>
            <h3>{categoria}</h3>

            {loading && <p>loading</p> }

            { <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )) 
                }
            </div> }
        </> 
    )
}

export default GiftGrid