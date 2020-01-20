import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const playButton = document.querySelector('#play')
const muteButton = document.querySelector('#mute')
const autoPlay = new AutoPlay() 

const player = new MediaPlayer({ el: video, plugins: [autoPlay]})

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()