document.addEventListener('DOMContentLoaded', function() {
  const analyzeButton = document.getElementById('analyze');
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');
  
  analyzeButton.addEventListener('click', async () => {
    try {
      resultDiv.innerHTML = '<p class="loading">Analyzing page text...</p>';
      errorDiv.textContent = '';
      
      // Get the active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      // Execute the content script to get text and word counts
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: analyzePageText
      });
      
      const wordCounts = results[0].result;
      
      if (!wordCounts || Object.keys(wordCounts).length === 0) {
        resultDiv.innerHTML = '<p>No text found on this page, or all words were filtered out.</p>';
        return;
      }
      
      // Display the top 10 most common words
      displayResults(wordCounts);
    } catch (error) {
      errorDiv.textContent = `Error: ${error.message}`;
      resultDiv.innerHTML = '<p>Failed to analyze the page.</p>';
      console.error(error);
    }
  });
  
  function displayResults(wordCounts) {
    // Sort words by count (descending)
    const sortedWords = Object.entries(wordCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10); // Get top 10
    
    let html = '<h2>Most Common Words:</h2>';
    
    if (sortedWords.length === 0) {
      html += '<p>No significant words found.</p>';
    } else {
      html += '<div>';
      sortedWords.forEach(([word, count]) => {
        html += `<div class="word-count">
          <span>${word}</span>
          <span>${count} occurrence${count !== 1 ? 's' : ''}</span>
        </div>`;
      });
      html += '</div>';
    }
    
    resultDiv.innerHTML = html;
  }
});

// This function runs in the context of the web page
function analyzePageText() {
  // Get all visible text from the page
  const bodyText = document.body.innerText || document.body.textContent;
  
  // Split into words and normalize
  const words = bodyText
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
    .split(/\s+/)
    .filter(word => 
      word.length > 2 && // Filter out short words
      !/^\d+$/.test(word) && // Filter out numbers
      !isStopWord(word) // Filter out common stop words
    );
  
  // Count word occurrences
  const wordCounts = {};
  words.forEach(word => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });
  
  return wordCounts;
  
  // Helper function to check if a word is a common stop word
  function isStopWord(word) {
    const stopWords = new Set([
      'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'any', 'can', 
      'had', 'has', 'her', 'his', 'its', 'was', 'our', 'she', 'who', 'will', 
      'with', 'would', 'this', 'that', 'they', 'them', 'then', 'there', 'these',
      'from', 'have', 'were', 'what', 'when', 'where', 'which', 'your', 'been'
    ]);
    return stopWords.has(word);
  }
}
