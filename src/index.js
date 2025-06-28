import videojs from 'video.js';
import 'videojs-contrib-dash';  // DASH support

// import 'videojs-contrib-eme'; // DRM support
// import 'dashjs'; // dash.js dependency

export function initializePlayer(config = {}) {
  const { videoId, videoSrc, options = {} } = config
  // const { videoId, videoSrc, licenseUrl, drmType = 'com.widevine.alpha', options = {} } = config
  const player = videojs(videoId, {
    autoplay: true,
    controls: true,
    muted: true,
    preload: 'auto',
    fluid: true,
    ...options,
  });

  player.ready(() => {
    player.src({
      src: videoSrc,
      type: 'video/mp4',
      // type: 'application/dash+xml',
      // keySystems: {
      //     [drmType]: licenseUrl,
      // },
    });
  });

  return player;
}
