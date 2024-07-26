/* Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola. */

const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  
    let songs = {};
  //let songsByGenre = [];

    for (let track of tracks) {
        let genre = track.genre;
            if (!songs[genre]) {
            songs[genre] = [];
        }

        songs[genre].push(track);
    }

    console.log(songs);

    // Dejo esta primera solución por aquí porque me ha ayudado a encontrar la lógica final y porque me parece que es una obra de arte xdd

    /*if (track.genre === 'Rock' && !songsByGenre[genre]) {
        songsByGenre[genre] = [];
        songsByGenre.push(track);
        songs = { genre: 'Rock', song: [songsByGenre[0]]};
    } else if (track.genre === 'Metal' && !songsByGenre[genre]) {
        songsByGenre[genre] = [];
        songsByGenre.push(track);
        songs = { genre: 'Metal', song: [songsByGenre[1]]}
    } else if (track.genre === 'Country' && !songsByGenre[genre]) {
        songsByGenre[genre] = [];
        songsByGenre.push(track);
        songs = { genre: 'Country', song: [songsByGenre[2]]}
    } else if (track.genre === 'Pop' && !songsByGenre[genre]) {
        songsByGenre[genre] = [];
        songsByGenre.push(track);
        songs = { genre: 'Pop', song: [songsByGenre[3]]}
    } else if (track.genre === 'Grunge' && !songsByGenre[genre]) {
        songsByGenre[genre] = [];
        songsByGenre.push(track);
        songs = { genre: 'Grunge', song: [songsByGenre[4]]}
    }

        songsByGenre[genre].push(songsByGenre);*/
  

        
      