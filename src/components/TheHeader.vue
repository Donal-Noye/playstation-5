<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header-user">
          <div class="header-user__avatar">
            <img class="img" src="@/assets/img/jo-accord_user.jpg" alt="">
          </div>
          <h6 class="header-user__name">Jo-Accord</h6>
          <img class="header-user__ps-plus" src="@/assets/img/ps-plus.png" alt="">
        </div>
        <button class="header-notifications">
          <img src="@/assets/img/notifications-icon.svg" alt="">
          <div class="header-notifications__value">
            <span>3</span>
          </div>
        </button>
        <div class="header__right">
          <button class="header__item header__friends">
            <img src="@/assets/img/friends-icon.svg" alt="">
            <span>13</span>
          </button>
          <button class="header__item header__trophy">
            <img src="@/assets/img/trophy-icon.svg" alt="">
            <span>
              <img src="@/assets/img/trophy-star-icon.svg" alt="">
              10
            </span>
          </button>
          <RealtimeClock />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import RealtimeClock from "./RealtimeClock.vue";

export default {
  setup() {
    return {};
  },
  components: { RealtimeClock }
}
</script>

<style lang="scss">
.header {
  width: 100%;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 50px;
  }

  &__right {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 45px;
    align-items: center;
    color: #fff;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;

    &.header__friends {
      span {
        font-size: 24px;
      }
    }

    &.header__trophy {
      span {
        display: flex;
        align-items: center;
        padding: 0 13px;
        gap: 5px;

        height: 40px;

        font-size: 18px;
        background-color: #df7f00;
        border-radius: 20px;

        img {
          display: block;
          padding-bottom: 3px;
        }
      }
    }
  }
}

.header-user {
  display: flex;
  align-items: center;

  &__avatar {
    width: 80px;
    height: 80px;
  }

  &__name {
    margin: 7px 20px 0 30px;

    font-size: 30px;
    color: #fff;
  }
}

.header-notifications {
  display: flex;
  align-items: center;
  gap: 20px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  &__value {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 50px;
    height: 50px;

    border-radius: 50%;
    background-color: #fff;

    span {
      display: block;
      padding-top: 3px;
      font-weight: 700;
      font-size: 20px;
    }
  }
}
</style>