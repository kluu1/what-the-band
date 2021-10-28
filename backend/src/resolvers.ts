import axios from 'axios';

const baseUrl = 'https://api.chucknorris.io/jokes';

export default {
  Query: {
    randomJoke: async (_, args) => {
      const url =
        args.category !== 'random'
          ? `${baseUrl}/random?category=${args.category}`
          : `${baseUrl}/random`;

      try {
        const joke = await axios.get(url);
        return joke?.data;
      } catch (e) {
        console.error(`error fetching joke: ${e}`);
      }
    },
  },
};
