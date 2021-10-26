export default {
  Query: {
    getJokes: (_, args) => {
      const jokes = [
        {
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: '4Bxi-E-MQESLu-yQuZD2-g',
          url: 'https://api.chucknorris.io/jokes/4Bxi-E-MQESLu-yQuZD2-g',
          value: "The movie 'Anacondas' was filmed in Chuck Norris' pants",
          icon_url: 'https://api.chucknorris.io/jokes/4Bxi-E-MQESLu-yQuZD2-g',
          categories: [],
        },
        {
          icon_url:
            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          id: 'T67Tx8ZKRB-BsX_KeJC74A',
          url: 'https://api.chucknorris.io/jokes/T67Tx8ZKRB-BsX_KeJC74A',
          value:
            "There are only two true wonders of the world... and they are both down Chuck Norris' pants.",
          categories: [],
        },
      ];

      return jokes;
    },
  },
};
