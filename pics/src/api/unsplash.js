
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID fc0df560f78db55bf4f102d7313b9d221ad3ba348c2ffb1a3bc544a4b1699af6"
      }
});