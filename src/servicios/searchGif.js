const searchGif = query => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        query
        )}&limit=10&api_key=oAilDgJZfgzg38LMTGIGtmpDf8sH7FEX`
    return fetch(url).then(res => res.json())
}

export default searchGif