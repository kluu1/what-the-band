import axios from 'axios';

const baseUrl = 'https://api.chucknorris.io/jokes';

export default {
  Query: {
    randomJoke: async (_, args) => {
      const joke = await axios.get(`${baseUrl}/random`);
      return joke?.data;
    },
  },
};
