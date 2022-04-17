import { IUser, UserResponse } from "@/types/types";

export const userModule = {
  state() {
    return {
      user: null,
      isLoading: false,
    };
  },
  mutations: {
    setUser(state: IUser, action: UserResponse) {
      state.user = action;
    },
    setImage(state: IUser) {
      if (state.user) {
        state.user.avatar = null;
      }
    },
    setIsLoading(state: IUser, action: boolean) {
      state.isLoading = action;
    },
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getRandomUser({ commit }) {
      commit("setIsLoading", true);

      fetch("https://random-data-api.com/api/users/random_user")
        .then((response) => response.json())
        .then((data) => commit("setUser", data))
        .catch((error) => console.log(error))
        .finally(() => commit("setIsLoading", false));
    },
  },
  namespaced: true,
};
