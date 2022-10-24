import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

const videoStartTime = localStorage.getItem(VIDEO_CURRENT_TIME)

if (videoStartTime) {
  player.setCurrentTime(videoStartTime);
}
const onPlay = throttle(data => {
  localStorage.setItem(VIDEO_CURRENT_TIME, data.seconds);
}, 1000);

player.on('timeupdate', onPlay);

