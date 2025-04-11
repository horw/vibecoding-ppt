# Anime Tab Opener

A Chrome extension that opens a random anime opening or lo-fi chillhop track on every new tab to keep your energy up.

## Features

- Opens a YouTube video on every new tab
- Toggle between anime openings and lo-fi chillhop tracks
- New track button to manually load a different track
- Remembers your preference (anime or lo-fi) between sessions
- Clean, modern UI with responsive design

## Installation

Since this extension is not published to the Chrome Web Store, you'll need to install it in developer mode:

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" using the toggle in the top right corner
3. Click "Load unpacked" and select the `anime-tab-opener` folder
4. The extension should now be installed and will activate when you open a new tab

## Usage

- Open a new tab to automatically play a random track
- Use the toggle switch to choose between anime openings and lo-fi chillhop
- Click the "New Track" button to load a different random track
- Your preference (anime or lo-fi) will be saved for future sessions

## Customization

You can customize the list of videos by editing the arrays in `newtab.js`:
- `animeOpenings` - Array of YouTube video IDs for anime openings
- `lofiTracks` - Array of YouTube video IDs for lo-fi chillhop tracks

To add your own videos, simply add the YouTube video ID to the appropriate array.

## Notes

- This extension requires an internet connection to work properly
- YouTube videos are loaded via the YouTube iFrame API
- Some videos may be unavailable in certain regions due to copyright restrictions
