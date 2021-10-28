import axios from 'axios';
const KEY = 'AIzaSyAtJpRbKQKYo3l36arKk2j6qa7OfnRV9Xw'; // *** Insert own youtube api key here... https://console.cloud.google.com/

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});