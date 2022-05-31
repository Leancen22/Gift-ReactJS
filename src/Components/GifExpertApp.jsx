import React, {useState} from 'react'
import AddCategory from './AddCategory'
import GiftGrid from './GiftGrid'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategorias={setCategorias}
            />
            <hr/>
            <ol>
                {
                    categorias.map( categoria => 
                        <GiftGrid 
                            key={categoria}
                            categoria={categoria}
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp