export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categoria)}&api_key=w9zKclldllBx9EQlYm0p5i4XTVz0gruO`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}