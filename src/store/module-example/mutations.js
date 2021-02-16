export function setAlbums (state, albums) {
    state.albums = albums;
}

export function setUsers (state, users) {
    state.users = users;
}

export function setPhotos (state, photos) {
    state.photos = photos;
}


export function deleteAlbum (state, albumId) {
    state.albums = state.albums.filter((album) => {
        return album.id != albumId;
    });
}

export function addPhoto (state, photoInfo) {
    state.photos.unshift(photoInfo);
}

export function editPhoto (state, photoInfo) {
    state.photos = state.photos.filter((photo) => {
        return photo.id != photoInfo.id;
    });

    state.photos.unshift(photoInfo);
}

export function deletePhoto (state, photoInfo) {
    state.photos = state.photos.filter((photo) => {
        return photo.id != photoInfo.id;
    });
}