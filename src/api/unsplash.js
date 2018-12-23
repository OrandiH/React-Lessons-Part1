import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1b5ffcd301d61823107d7387838024b06717f225af8955c286d4bdb8d94daef5'
  }
});