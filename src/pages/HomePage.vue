<template>
  <main class="main">
    <div class="container">
      <loader-component v-if="this.beerLoading()"></loader-component>
      <beer-item v-else></beer-item>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import BeerItem from "../components/Beer/BeerItem";
import LoaderComponent from "../components/Loader/LoaderComponent";

export default {
  methods: {
    ...mapGetters({
      beerLoading: "beer/getIsLoading",
    }),
  },
  components: {
    "beer-item": BeerItem,
    "loader-component": LoaderComponent,
  },
};
</script>
