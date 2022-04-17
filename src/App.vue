<template>
  <header-component></header-component>
  <router-view></router-view>
</template>

<script>
import { mapActions } from "vuex";
import HeaderComponent from "./components/Header/HeaderComponent";

export default {
  mounted() {
    this.getRandomBeer();
    this.getRandomUser();
  },
  methods: {
    ...mapActions({
      getRandomBeer: "beer/getRandomBeer",
      getRandomUser: "user/getRandomUser",
    }),
  },
  components: {
    "header-component": HeaderComponent,
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-size: 18px;
  line-height: 24px;
  font-family: "Roboto", sans-serif;
  color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 10px;
}

.main {
  padding: 30px 0;
}

.title {
  font-size: 20px;
  font-weight: 700;
}

@media (min-width: 420px) {
  .container {
    padding: 0 15px;
  }
}
</style>
