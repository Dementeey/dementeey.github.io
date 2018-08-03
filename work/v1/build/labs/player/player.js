// Get elements

const player             = document.querySelector('.player');
const video              = player.querySelector('#video');
const porgress           = player.querySelector('.porgress');
const porgressBar        = player.querySelector('.progress__filled');
const toggle             = player.querySelector('.toggle');
const skipBtns           = player.querySelectorAll('[data-skip]');
const videoTime          = player.querySelector('.player__video-time');
const videoTimeCurrent   = videoTime.querySelector('.player__video-time-current');
const videoTimeDuration  = videoTime.querySelector('.player__video-time-duration');
const volumeToggle       = player.querySelector('.player__volume-toggle');
const volumeSlider       = player.querySelector('.player__volume-slider');
const openFullscreenBtn  = player.querySelector('.btn-fullscreen-open');
const closeFullscreenBtn = player.querySelector('.btn-fullscreen-closed');

// Build out function

function togglePlay() {

  if (video.paused) {
    toggle.classList.remove('paused');
    toggle.classList.remove('replay');
    toggle.classList.add('plays');
    return video.play();
  }

  toggle.classList.remove('plays');
  toggle.classList.add('paused');
  video.pause();
};

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  return porgressBar.style.width = percent.toFixed(3) + '%';
};

function scrab(e) {
  const scrabTime = (e.offsetX / porgress.offsetWidth) * video.duration;
  video.currentTime = scrabTime;
}

function videoDuration() {
  const duration = video.duration;
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration % 60);

  videoTimeDuration.innerHTML = `${minutes}:${seconds}`;
};

function videoCurrent() {
  const current = video.currentTime;
  let minutes = Math.floor(current / 60);
  let seconds = Math.floor(current % 60) < 10 ? '0' + Math.floor(current % 60) : Math.floor(current % 60);

  videoTimeCurrent.innerHTML = `${minutes}:${seconds}`;
};

function toggleVolumeMute() {
  if (!video.muted) {
    volumeToggle.classList.add('player__volume-toggle--muted');
    return video.muted = true;
  }

  volumeToggle.classList.remove('player__volume-toggle--muted');
  video.muted = false;
};

function volumeSliderLevel() {
let valueSlider = volumeSlider.value;

  if (valueSlider > 0.5) {
    volumeToggle.classList.remove('player__volume-toggle--off');
    volumeToggle.classList.remove('player__volume-toggle--muted');
    volumeToggle.classList.remove('player__volume-toggle--low');
  }

  if ((valueSlider < 0.5) && (valueSlider >0.1) ) {
    volumeToggle.classList.add('player__volume-toggle--low');
    volumeToggle.classList.remove('player__volume-toggle--off');
    volumeToggle.classList.remove('player__volume-toggle--muted');
  }
  if (valueSlider < 0.1) {
    volumeToggle.classList.add('player__volume-toggle--off');
    volumeToggle.classList.remove('player__volume-toggle--muted');
    volumeToggle.classList.remove('player__volume-toggle--low');
  }
};

function handleVolumeLevel() {
  video[this.name] = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
};


// events


toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('ended', () => {
  toggle.classList.remove('plays');
  toggle.classList.remove('paused');
  toggle.classList.add('replay');
});
video.addEventListener('canplay', videoDuration);
video.addEventListener('timeupdate', () => {
  videoCurrent();
  handleProgress();
})
porgress.addEventListener('click', scrab);
let mousedown = false;
porgress.addEventListener('mousemove', (e) => mousedown && scrab(e) );
porgress.addEventListener('mousedown', () => mousedown = true );
porgress.addEventListener('mouseup', () => mousedown = false );
volumeToggle.addEventListener('click', toggleVolumeMute);
volumeSlider.addEventListener('input', volumeSliderLevel);
volumeSlider.addEventListener('input', handleVolumeLevel);
skipBtns.forEach(button => button.addEventListener('click', skip));


// use fullscreen API

openFullscreenBtn.addEventListener('click', () => {
  if (screenfull.enabled) {
    screenfull.request(player);
  }
});

closeFullscreenBtn.addEventListener('click', () => {
  screenfull.exit();
});

if (screenfull.enabled) {
	screenfull.on('change', () => {
		if (screenfull.isFullscreen) {
      player.style.minWidth  = 100 + 'vw';
      player.style.minHeight = 100 + '%';
      openFullscreenBtn.style.display = 'none';
      closeFullscreenBtn.style.display = 'block';
    } else {
      player.removeAttribute('style');
      openFullscreenBtn.removeAttribute('style');
      closeFullscreenBtn.removeAttribute('style');
    }
  });
}

video.addEventListener('dblclick', () => {
  if (screenfull.enabled) {
    screenfull.request(player);
  }

  screenfull.exit();
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  screenfull.on('change', () => {
		if (screenfull.isFullscreen) {
      player.style.minWidth  = 100 + '%';
      player.style.minHeight = 100 + 'vh';

      video.style.minWidth  = 100 + '%';
      video.style.minHeight = 'auto';

    } else {
      player.removeAttribute('style');
      video.removeAttribute('style');
    }
  })
}
