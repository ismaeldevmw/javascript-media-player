import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#btnPlay');
const buttonMute = document.querySelector('#btnMute');

const player = new MediaPlayer({ 
	el: video,
	plugins: [
		new AutoPlay()
	]
 });

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
// button.onclick = () => video.play();