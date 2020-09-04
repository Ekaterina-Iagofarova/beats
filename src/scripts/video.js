const containerVideo = document.querySelector('.video');
const video = containerVideo.querySelector('video');
const playpause = containerVideo.querySelector('.video__play-pause');
const play = containerVideo.querySelector('.video__play');
const controls = containerVideo.querySelector('.video__switchers');
const total = containerVideo.querySelector('.video__total');
const progress = containerVideo.querySelector('.video__current');
const dynamic = containerVideo.querySelector('.video__volume-control');
const volume = containerVideo.querySelector('.video__volume-progress');
const volumeProgress = volume.firstElementChild;

playpause.addEventListener('click', togglePlay);
play.addEventListener('click', togglePlay);
video.addEventListener('play', playPause);
video.addEventListener('pause', playPause);
total.addEventListener('click', setCurrentTime);
video.addEventListener('timeupdate', timeUpdate);
dynamic.addEventListener('click', mute);
volume.addEventListener('click', setVolume);

function setVolume(e) {
    volumeProgress.style.width = `${e.offsetX}px`;
    console.log(e.offsetX / volume.clientWidth)
    video.volume = e.offsetX / volume.clientWidth;
}

function mute(e) {
    dynamic.classList.toggle('video__volume-control_muted');
    console.log(video.muted)
    video.muted = !video.muted;
}

function playPause() {
    controls.classList.toggle('video__switchers_paused');
}

function togglePlay() {
    video.paused ?  video.play() : video.pause();
}

function setCurrentTime(e) {
    const offsetX = e.offsetX / total.clientWidth;
    console.log(offsetX * video.duration)
    video.currentTime = offsetX * video.duration;
}

function timeUpdate() {
    
    const progressTime = video.currentTime / video.duration;

    progress.style.width = `${progressTime * total.clientWidth}px`;
}