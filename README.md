# 🎬 Online Video Player

A simple, lightweight, yet powerful **web-based video player** built on top of [Video.js](https://videojs.com/). Designed to support modern streaming protocols and playback requirements including **HLS**, **DASH**, **DRM**, and **Ad Monetization**.

---

## 🚀 Features

- ✅ **HLS** (`.m3u8`) streaming support
- ✅ **MPEG-DASH** (`.mpd`) streaming support
- ✅ **DRM** (Widevine, FairPlay, PlayReady)
- ✅ **Ads** (Google IMA, VAST, VPAID)
- ✅ Responsive and mobile-friendly UI
- ✅ Customizable & extensible via plugins

---

## 🧪 Supported Stream Types

| **Type**       | **Extension** | **Description**                                |
|----------------|---------------|------------------------------------------------|
| MPEG-DASH      | `.mpd`        | Adaptive bitrate streaming (MPEG-DASH)         |
| HLS            | `.m3u8`       | Apple's HTTP Live Streaming                    |
| Progressive    | `.mp4`        | Standard MP4 file streaming                    |
| Encrypted      | —             | DRM-protected streams (Widevine, FairPlay)     |
| Ad Tags        | `.xml`        | VAST / VPAID ad tags                           |

---


## 📦 Tech Stack

- [Video.js](https://videojs.com/)
- [videojs-contrib-dash](https://github.com/videojs/videojs-contrib-dash)
- [videojs-http-streaming (VHS)](https://github.com/videojs/http-streaming)
- [Google IMA SDK](https://developers.google.com/interactive-media-ads)

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/online-video-player.git
cd online-video-player
npm install
npm start
```

---

## 📸 Preview

![Video Player Screenshot](./preview.png)

---




