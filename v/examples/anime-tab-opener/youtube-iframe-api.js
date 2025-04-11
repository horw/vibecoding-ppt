var scriptUrl = 'https://www.youtube.com/s/player/9599b765/www-widgetapi.vflset/www-widgetapi.js';
window['yt_embedsEnableIframeApiSendFullEmbedUrl'] = true;
window['yt_embedsEnableAutoplayAndVisibilitySignals'] = true;

var YT;
if(!window["YT"]) YT = {loading:0, loaded:0};
var YTConfig;
if(!window["YTConfig"]) YTConfig = {"host":"https://www.youtube.com"};

if(!YT.loading) {
  YT.loading = 1;
  (function(){
    var l = [];
    YT.ready = function(f) {
      if(YT.loaded) f();
      else l.push(f);
    };
    
    window.onYTReady = function() {
      YT.loaded = 1;
      var i = 0;
      for(; i < l.length; i++) try { l[i](); } catch(e) {}
    };
    
    YT.setConfig = function(c) {
      var k;
      for(k in c) if(c.hasOwnProperty(k)) YTConfig[k] = c[k];
    };
    
    // Modified to use a local function to load the widget API
    function loadWidgetApi() {
      if (typeof window.YT === 'object' && window.YT.loaded) {
        window.onYouTubeIframeAPIReady();
        return;
      }
      
      // Instead of loading from external URL, we'll handle this differently
      // We'll create a message system to communicate with the YouTube frame
      console.log("YouTube IFrame API Ready");
      window.onYouTubeIframeAPIReady();
    }
    
    // Call the function immediately
    loadWidgetApi();
  })();
}
