const audio = document.getElementById('audio');
const playlistElement = document.getElementById('playlist');
const songInput = document.getElementById('songInput');
const genreInput = document.getElementById('genreInput');
const addSongButton = document.getElementById('addSong');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let playlist = [];
let currentSongIndex = 0;

// Function to add a song to the playlist
addSongButton.addEventListener('click', () => {
    const songUrl = songInput.value;
    const genre = genreInput.value;
    if (songUrl) {
        playlist.push({ url: songUrl, genre });
        updatePlaylistDisplay();
        songInput.value = '';
        genreInput.value = '';
    }
});

// Function to update the playlist display
function updatePlaylistDisplay() {
    playlistElement.innerHTML = '';
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}: ${song.url} (${song.genre})`;
        li.addEventListener('click', () => playSong(index));
        playlistElement.appendChild(li);
    });
}

// Function to play a song
function playSong(index) {
    currentSongIndex = index;
    audio.src = playlist[currentSongIndex].url;
    audio.play();
}

// Function to play the next song
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(currentSongIndex);
});

// Function to play the previous song
prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
});