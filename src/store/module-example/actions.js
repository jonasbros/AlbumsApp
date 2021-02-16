import axios from 'axios';

export function fetchAlbums (context) {
    if( context.state.albums.length ) return;

    axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
            context.commit('setAlbums', response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function fetchUsers (context) {
    if( context.state.users.length ) return;

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        context.commit('setUsers', response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

export function fetchPhotos (context) {
    if( context.state.photos.length ) return;

    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
        context.commit('setPhotos', response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

