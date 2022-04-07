/* global Vue */

var App = {
  data: function () {
    return {
      message: "World's Best Movies (fact, not opinion)",
      movies: ["A League of Their Own", "Apollo 13", "Toy Story", "Titanic"],
      newMovie: "",
    };
  },
  methods: {
    addMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    },
  },
};

Vue.createApp(App).mount("#app");
