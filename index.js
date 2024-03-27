// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Added songs
    { title: "Crazy", artist: "Gnarls Barkley", genre: "R&B" },
    { title: "Californication", artist: "Red Hot Chili Peppers", genre: "Rock" },
    { title: "Just the Two of Us", artist: "Grover Washington Jr.", genre: "R&B" },
    { title: "Lose Yourself", artist: "Eminem", genre: "Rap" },
    { title: "The Real Slim Shady", artist: "Eminem", genre: "Rap" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Rap"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    //Empty array for playlists
    let guardianPlaylists = [];

    //Keeps track of which guardian is active
    let guardianCount = 0;

    //Iterates through guardian's preferred genre
    for (let guardian of Object.values(guardians)){

        //Adds song to array if it matches the guardians genre, else adds undefined
        guardianPlaylists.push(songs.map((song) => {
            if(song.genre === guardian) {
                return song;
            };
        }));

        //Filters out all the undefined values
        guardianPlaylists[guardianCount] = guardianPlaylists[guardianCount].filter((song) => {
            return song !== undefined;
        })

        //Increases count to ensure going to the next guardian
        guardianCount += 1;
    }

    //Returns the array that contains the playlist for each guardian
    return guardianPlaylists;
}

//Generates playlists
guardianPlaylists = generatePlaylist(guardians, songs);

//Function that displays the guardians with their playlists to the DOM
function displayPlaylists(guardianPlaylists) {

    //Keeps track of which guardian is active
    let guardianCount = 0;

    //Generates array of the guardian names
    let guardiansArr = Object.keys(guardians);

    //Grabs playlists element from the DOM
    const playlistsEl = document.querySelector('#playlists');

    //Iterates through all the guardians
    guardianPlaylists.forEach((guardian) => {

        //Creates playlist element and adds it as a child to the playlists element for each guardian
        let playlist = document.createElement('div');
        playlist.setAttribute('class', 'playlist');
        playlistsEl.appendChild(playlist);

        //Adds guardian name
        playlist.innerHTML =`<h2>${guardiansArr[guardianCount]}</h2>`;

        //Iterates through each song of each guardian
        guardian.forEach((song) => {
            
            //Displays the song title and artist
            playlist.innerHTML += `<p><span class="song-title">${song.title}</span> by ${song.artist}</p>`;
        })

        //Increases count to ensure going to the next guardian
        guardianCount += 1;
    });
}

//Displays playlists
displayPlaylists(guardianPlaylists);


