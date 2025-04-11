// This script runs in the context of web pages
// It can optionally be used for communication between the page and popup
// For now it's a minimal implementation since we execute most functionality from popup.js

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getPageText') {
    const pageText = document.body.innerText || document.body.textContent;
    sendResponse({ text: pageText });
  }
});

// Optional: You could add functionality here to analyze text without requiring popup interaction
// For example, adding a floating button or automatic analysis on page load
