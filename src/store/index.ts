import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { IBeer, IUser } from "@/types/types";
import { beerModule } from "@/store/modules/beer";
import { userModule } from "@/store/modules/user";

interface State {
  beer: IBeer;
  user: IUser;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    beer: beerModule,
    user: userModule,
  },
});
