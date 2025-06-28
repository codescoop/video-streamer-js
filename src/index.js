import videojs from 'video.js';
import 'videojs-contrib-eme';
import 'videojs-contrib-dash';
import 'dashjs';

export function VideoStreamer(config = {}) {
    const { videoId, videoSrc, licenseUrl, drmType = 'com.widevine.alpha', options = {} } = config
    const player = videojs(videoId, {
        autoplay: true,
        controls: true,
        muted: true,
        preload: 'auto',
        fluid: true,
        ...options,
    });

    player.ready(() => {
        // player.eme(); // Initialize EME plugin
        player.src({
            src,
            type: 'application/dash+xml',
            keySystems: {
                [drmType]: licenseUrl,
            },
        });
    });

    return player;
}
