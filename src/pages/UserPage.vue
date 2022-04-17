<template>
  <main class="main">
    <div class="container">
      <div class="user">
        <div class="user-profile">
          <div class="user__avatar">
            <img v-if="this.avatar" :src="this.avatar" alt="" />
            <img
              src="@/assets/error.png"
              alt=""
              class="user__avatar-preload"
              v-else
            />
          </div>
          <h2 class="user-profile__name">{{ this.username }}</h2>
          <div class="user-profile__status">
            Payment status: {{ this.status }}
          </div>
        </div>
        <h3 class="title">Profile info</h3>
        <ul class="user-info">
          <li class="user-info__item">
            Name: {{ this.first_name + " " + this.last_name }}
          </li>
          <li class="user-info__item">Date: {{ this.date }}</li>
          <li class="user-info__item">Phone: {{ this.phone }}</li>
          <li class="user-info__item">Email: {{ this.email }}</li>
          <li class="user-info__item">Employment: {{ this.employment }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      username: (state) => state.user.user?.username,
      first_name: (state) => state.user.user?.first_name,
      last_name: (state) => state.user.user?.last_name,
      avatar: (state) => state.user.user?.avatar,
      id: (state) => state.user.user?.id,
      date: (state) => state.user.user?.date_of_birth,
      phone: (state) => state.user.user?.phone_number,
      email: (state) => state.user.user?.email,
      status: (state) => state.user.user?.subscription?.status,
      employment: (state) => state.user.user?.employment.title,
      isLoading: (state) => state.user.isLoading,
    }),
  },
};
</script>

<style lang="scss">
.user {
  &-profile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    overflow: hidden;
    padding-top: 30px;

    &__name {
      font-size: 28px;
      line-height: 1.5;
      font-weight: 700;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    &__status {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  &__avatar {
    & img {
      width: 250px;
      height: 250px;
    }

    &-preload {
      width: 350px;
      height: 350px;
      background-color: #808080;
    }
  }

  &-info {
    list-style: none;
    border: 1px solid #333;

    &__item {
      padding: 8px 10px;
      &:not(:last-child) {
        border-bottom: 1px solid #333;
      }
    }
  }
}

@media (min-width: 420px) {
  .user {
    &__avatar img {
      width: 300px;
      height: 300px;
    }
  }
}

@media (min-width: 600px) {
  .user {
    &-profile {
      &__name {
        font-size: 56px;
      }
    }
  }
}

@media (min-width: 800px) {
  .user {
    &-profile {
      flex-direction: row;
      padding: 0;
    }

    &__avatar {
      margin-right: 30px;
    }
  }
}
</style>
