const GOOGLE_API_KEY = "AIzaSyCJ87_8uhOoKKU2fR_-LD60A68TRRywjLE";


export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;


export const VIDEO_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + '&id=';

export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


export const LIVE_CHAT_COUNT = 50;