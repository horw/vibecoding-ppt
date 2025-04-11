// Initialize player variables
let currentVideoId = '';

// Lists of video IDs
const animeOpenings = [
  // Naruto
  'aJRu5ltxXjc', // Naruto - Silhouette
  '4t__wczfpRI', // Naruto - Blue Bird
  'd10_sLHZNhA', // Naruto - Sign
  'lilv4MvBY6E', // Naruto - Blood Circulator
  
  // Attack on Titan
  'rwCJvSKzQkc', // AoT - Shinzou wo Sasageyo
  'M_OauHnAFc8', // AoT - Guren no Yumiya
  'qOnDBSBmnAE', // AoT - The Rumbling
  '5hMoL08-pj8', // AoT - My War
  
  // My Hero Academia
  'v1YojYU5nPQ', // MHA - Peace Sign
  'iutQJzAXiWo', // MHA - The Day
  'vA86QFrXoho', // MHA - Odd Future
  'GgwUzer-4xA', // MHA - Merry-Go-Round
  
  // Demon Slayer
  'pmanD_s7G3U', // Demon Slayer - Gurenge
  'E0UEOfXpXGc', // Demon Slayer - Zankyosanka
  
  // Jujutsu Kaisen
  'GwaRztMaoY0', // JJK - Kaikai Kitan
  '6riDJMI-Y8U', // JJK - Vivid Vice
  
  // One Piece
  'dM7x1PNZDo0', // One Piece - We Are
  'xh39zs1dLaE', // One Piece - Hope
  
  // Tokyo Ghoul
  '7aMOurgDB-o', // Tokyo Ghoul - Unravel
  
  // Fullmetal Alchemist
  'JuKmo8TetVY', // FMA - Again
  
  // Your Lie in April
  'lkdi6eK05OA', // Your Lie in April - Hikaru Nara
  
  // Sword Art Online
  'KId6eunoiWk', // SAO - Crossing Field
  
  // Death Note
  'K--OF8XiiZM', // Death Note - The World
  
  // Dragon Ball Super
  'KVHFkEFuss4'  // DBS - Limit Break x Survivor
];

const lofiTracks = [
  // Lo-Fi Mixes (more widely available)
  'DWcJFNfaw9c', // 2 A.M Study Session
  'lTRiuFIWV54', // 1 A.M Study Session
  '36mnx8dBbGE', // Book Store Lofi
  'WxfSEWc5Uc4', // Japanese Lofi Mix
  
  // Anime-Themed Lofi
  'ZETB5HGjnTY', // Studio Ghibli Lofi Covers
  'OgffVe43d_k', // Lofi Anime Inspired Beats
  'CYgw-RBa6Yk', // Naruto Lofi Mix
  'NsGUQVAupbI', // Anime Aesthetic Lofi Mix
  
  // Study Music
  'tgI6PjEq0O8', // Study Music - 1 Hour Focus
  'iEGFFyv0MH4', // 3 Hour Study Music
  'C84SPjHqgmY', // 6 Hour Music for Studying
  'NMmMNyMceyk', // Focus Music for Work
  
  // Relaxing Instrumental
  'iFMzD4lEmgY', // Morning Coffee Music
  'LCDLxnOq8Y4', // Relaxing Piano Music
  'HJWFsZ_YUvI', // Cozy Coffee Shop
  'q1FrU-nF9WI', // Rainy Mood Jazz
  
  // Gaming Music
  'x32GnKPCPAU', // Minecraft Lofi
  '_VXbSfWjpuU', // Zelda Breath of the Wild Lofi
  'XjcyJWKbL0k', // Final Fantasy Lofi 
  '1hrbkzIB5JA', // Pokémon Lofi
  
  // Seasonal Lofi
  '8Uk2S3m_3PA', // Winter Lofi
  'CLeZyIID9Bo', // Summer Lofi Mix
  'kgx4WGK0oNU', // Autumn Lofi
  'ydIL48SBKic'  // Spring Lofi
];

// Load a random video based on the selected type
function loadRandomVideo() {
  const isLofiSelected = document.getElementById('mediaTypeToggle').checked;
  const videoList = isLofiSelected ? lofiTracks : animeOpenings;
  
  // Get a random video that's different from the current one
  let newVideoId;
  do {
    const randomIndex = Math.floor(Math.random() * videoList.length);
    newVideoId = videoList[randomIndex];
  } while (newVideoId === currentVideoId && videoList.length > 1);
  
  currentVideoId = newVideoId;
  
  // Create iframe for YouTube video
  createPlayer(currentVideoId);
  
  updateTrackInfo(currentVideoId, isLofiSelected);
}

// Create the YouTube player
function createPlayer(videoId) {
  const playerContainer = document.getElementById('player');
  playerContainer.innerHTML = '';
  
  const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&iv_load_policy=3`;
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  
  playerContainer.appendChild(iframe);
  
  // Add event listener for when the iframe loads
  iframe.addEventListener('load', function() {
    console.log('Video loaded successfully');
  });
}

// Update the track info display
function updateTrackInfo(videoId, isLofi) {
  const trackTitleElement = document.getElementById('track-title');
  
  if (isLofi) {
    trackTitleElement.textContent = 'Lo-Fi Chillhop Track';
  } else {
    trackTitleElement.textContent = 'Anime Opening';
  }
}

// Initialize the extension
function initExtension() {
  // Set up event listeners
  document.getElementById('refresh-btn').addEventListener('click', loadRandomVideo);
  document.getElementById('mediaTypeToggle').addEventListener('change', loadRandomVideo);
  
  // Load user preferences from storage
  chrome.storage.sync.get('isLofiMode', function(data) {
    if (data.isLofiMode !== undefined) {
      document.getElementById('mediaTypeToggle').checked = data.isLofiMode;
    }
    
    // Load initial video
    loadRandomVideo();
  });
  
  // Save user preferences when they change
  document.getElementById('mediaTypeToggle').addEventListener('change', function() {
    chrome.storage.sync.set({
      isLofiMode: document.getElementById('mediaTypeToggle').checked
    });
  });
}

// Start the extension when the page loads
document.addEventListener('DOMContentLoaded', initExtension);
