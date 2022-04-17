<template>
  <div class="beer">
    <bear-button-reload></bear-button-reload>
    <div class="beer__img">
      <img src="@/assets/beer.png" alt="" />
    </div>
    <div class="beer__name">{{ this.name }}</div>
    <h3 class="title">Beer info:</h3>
    <ul class="beer-list">
      <li class="beer-list__item">Brand: {{ this.brand }}</li>
      <li class="beer-list__item">Style: {{ this.style }}</li>
      <li class="beer-list__item">Yeast: {{ this.yeast }}</li>
      <li class="beer-list__item">Alcohol: {{ this.alcohol }}</li>
      <li class="beer-list__item">Malts: {{ this.malts }}</li>
    </ul>
  </div>
</template>

<script>
import BeerButtonReload from "./BeerButtonReload";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      name: (state) => state.beer.beer?.name,
      brand: (state) => state.beer.beer?.brand,
      style: (state) => state.beer.beer?.style,
      yeast: (state) => state.beer.beer?.yeast,
      alcohol: (state) => state.beer.beer?.alcohol,
      malts: (state) => state.beer.beer?.malts,
      isLoading: (state) => state.beer.isLoading,
    }),
  },
  components: {
    "bear-button-reload": BeerButtonReload,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
}

.beer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__img {
    margin-bottom: 30px;

    & img {
      width: 250px;
    }
  }

  &__name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &-list {
    padding: 15px 0 15px 40px;
  }
}

@media (min-width: 420px) {
  .beer {
    &__img {
      & img {
        width: 300px;
      }
    }
  }
}
</style>
