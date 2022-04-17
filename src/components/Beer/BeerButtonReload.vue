<template>
  <button @click="getRandomBeer" class="beer__restart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
    >
      <title>reload</title>
      <path
        d="M0 18c0 4.779 2.095 9.068 5.417 12l2.646-3c-2.491-2.199-4.063-5.416-4.063-9 0-6.627 5.373-12 12-12 3.314 0 6.314 1.343 8.485 3.515l-4.485 4.485h12v-12l-4.687 4.687c-2.895-2.896-6.895-4.687-11.313-4.687-8.837 0-16 7.163-16 16z"
      ></path>
    </svg>
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      getRandomBeer: "beer/getRandomBeer",
    }),
  },
};
</script>

<style lang="scss">
.beer {
  &__restart {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: 1px solid rgba(55, 55, 55, 0.5);
    cursor: pointer;
    border-radius: 50%;
  }
}
</style>
