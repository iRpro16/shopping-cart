function createUpdatedArray(fetchedAlbums, albumsArray) {
    const albumURLS = fetchedAlbums.map(albumData => albumData.images[0].url);
    const updatedAlbumsArray = [...albumsArray];
    for (let i = 0; i < albumsArray.length; i++) {
        updatedAlbumsArray[i]['url'] = albumURLS[i];
    }

    return updatedAlbumsArray;
}

export default createUpdatedArray;