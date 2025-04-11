# Word Counter Chrome Extension

A simple Chrome extension that analyzes web pages to find the most common words in the text.

## Features

- Analyzes the visible text content of any web page
- Filters out common "stop words" (like "the", "and", "for", etc.)
- Displays the top 10 most frequently used words
- Clean, simple user interface

## Installation

Since this extension isn't published on the Chrome Web Store, you'll need to install it in developer mode:

1. Download or clone this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The Word Counter extension will now appear in your extensions list

## Usage

1. Navigate to any website you want to analyze
2. Click on the Word Counter extension icon in your browser toolbar
3. In the popup, click the "Analyze Current Page" button
4. The extension will process the page text and display the most common words

## How It Works

The extension:
1. Extracts all visible text from the current web page
2. Cleans and normalizes the text (converts to lowercase, removes punctuation)
3. Filters out common stop words and short words (less than 3 characters)
4. Counts the occurrences of each word
5. Sorts and displays the most frequently used words

## Files

- `manifest.json`: Extension configuration and permissions
- `popup.html`: The UI that appears when clicking the extension icon
- `popup.js`: Handles the UI logic and communicates with the content script
- `content.js`: Runs in the context of web pages

## License

Feel free to modify and use this extension as needed.
