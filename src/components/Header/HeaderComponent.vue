<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header-profile" @click="handleToProfile">
          <div class="header-profile__avatar">
            <img
              v-if="this.avatar"
              :src="this.avatar ? this.avatar : '@/assets/error.png'"
              alt=""
              @error="this.setImage"
            />
            <img
              src="@/assets/error.png"
              alt=""
              class="header-profile__avatar-preload"
              v-else
            />
          </div>
          <div class="header-profile__name">{{ this.username }}</div>
        </div>
        <nav class="header-nav">
          <div class="header-nav__link">
            <router-link to="/"> Home </router-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import router from "@/router/router";

export default {
  computed: {
    ...mapMutations({
      setImage: "user/setImage",
    }),
    ...mapState({
      username: (state) => state.user.user?.username,
      avatar: (state) => state.user.user?.avatar,
      id: (state) => state.user.user?.id,
    }),
  },
  methods: {
    handleToProfile() {
      router.push({ path: `/user/${this.id}` });
    },
  },
};
</script>

<style lang="scss">
.header {
  background-color: #c0c0c0;

  &-nav {
    display: flex;
    align-items: center;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    min-height: 70px;
  }

  &-profile {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__avatar {
      margin-right: 15px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      &-preload {
        width: 50px;
        height: 50px;
        background-color: #808080;
        border-radius: 50%;
      }
    }
  }
  &-nav {
    &__link a {
      text-decoration: none;
      color: #333;
    }
  }
}
</style>
