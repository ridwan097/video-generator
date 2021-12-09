import axios from 'axios';

const KEY = 'AIzaSyBbNEjDsRKfForVLA9lxYTgUYaJx7pCMuQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
