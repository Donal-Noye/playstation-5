<template>
  <div class="user-card" :class="[{ active: activeUser }, color]">
    <div class="user-card__inner">
      <div class="user-card__avatar">
        <img class="img" :src="require(`@/assets/img/${avatar}`)" alt="">
      </div>
      <div class="user-card__content">
        <h5 class="user-card__name">{{ name }}</h5>
        <p v-if="lastOnline" class="user-card__last-online">Last online {{ lastOnline }}</p>
        <p v-else class="user-card__text">{{ text }}</p>
        <ButtonAction @click="$router.push({ name: 'Home' })" type="primary" text="Tap to sign in" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAction from "./ButtonAction.vue";

export default {
  props: ["avatar", "name", "lastOnline", "text", "active", "color"],
  data() {
    return {
      activeUser: this.active
    }
  },
  components: { ButtonAction }
}
</script>

<style lang="scss">
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 430px;

  -webkit-backface-visibility: hidden;
  background-color: #fff;
  position: relative;
  z-index: 1;

  transition: height .2s $ease 100ms;

  &.blue,
  &.orange {
    &:after {
      content: '';
      width: 100%;
      height: 100%;

      opacity: 0;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;

      transition: opacity .3s $ease;
    }
  }

  &.orange {
    &:after {
      background: linear-gradient(180deg, #665a00 0%, #000 80%);
    }
  }

  &.blue {
    &:after {
      background: linear-gradient(180deg, #004B66 0%, #000 80%);
    }
  }

  &.active,
  &:not(:first-child):not(:last-child):hover {
    height: 510px;

    &.orange {
      &:after {
        opacity: 1;
      }
    }

    &.blue {
      &:after {
        opacity: 1;
      }
    }
    
    .user-card__avatar {
      margin-top: -105px;

      width: 280px;
      height: 280px;
    }

    .user-card__name {
      color: #fff;
    }

    .user-card__last-online,
    .user-card__text {
      color: rgba(#fff, .7);
    }

    .button {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:first-child,
  &:last-child {
    cursor: pointer;

    .button {
      display: none;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 3;
  }

  &__avatar {
    margin-bottom: 30px;

    width: 180px;
    height: 180px;

    transition: all .3s $ease 50ms;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 220px;
    text-align: center;
  }

  &__name {
    margin-bottom: 20px;

    font-weight: 500;
    font-size: 36px;
    letter-spacing: -.75px;

    transition: color .25s $ease;
  }

  &__last-online,
  &__text {
    margin-bottom: 30px;

    font-size: 20px;
    color: rgba(#000, .7);
    line-height: 27px;
    letter-spacing: -.42px;

    transition: color .25s $ease;
  }

  .button {
    opacity: 0;
  }
}
</style>