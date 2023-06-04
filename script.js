const musicContainer = document.querySelector('.music-container')
const playBtn = document.getElementById('play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


//song titles
const songs =['hey', 'summer', 'ukulele']

//keep track of songs

let songIndex = 2

//intially load song
loadSong(songs[songIndex])

//update song details
function loadSong(song){
    title.innerText = song
    audio.src = `music/music-player_music_${song}.mp3`
    cover.src =`images/${song}.jpg`
}


//play songs
function playSong(){
musicContainer.classList.add('play');
}

function pauseSong(){

}  


//event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else {
        playSong()
    }

})

playSong()