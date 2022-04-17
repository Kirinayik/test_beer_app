import { BeerResponse, IBeer } from "@/types/types";

export const beerModule = {
  state() {
    return {
      beer: null,
      isLoading: false,
    };
  },
  mutations: {
    setBeer(state: IBeer, action: BeerResponse) {
      const { name, brand, style, yeast, alcohol, malts } = action;

      const formatObj = { name, brand, style, yeast, alcohol, malts };
      state.beer = formatObj;
    },
    setIsLoading(state: IBeer, action: boolean) {
      state.isLoading = action;
    },
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getRandomBeer({ commit }) {
      commit("setIsLoading", true);

      fetch("https://random-data-api.com/api/beer/random_beer")
        .then((response) => response.json())
        .then((data) => commit("setBeer", data))
        .catch((error) => console.log(error))
        .finally(() => commit("setIsLoading", false));
    },
  },
  getters: {
    getIsLoading(state: IBeer) {
      return state.isLoading;
    },
  },
  namespaced: true,
};
