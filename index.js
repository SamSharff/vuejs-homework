/* global Vue */

var App = {
  data: function () {
    return {
      message: "World's Best Movies",
      movies: ["A League of Their Own", "Apollo 13", "Toy Story", "Titanic"],
    };
  },
};

Vue.createApp(App).mount("#app");
