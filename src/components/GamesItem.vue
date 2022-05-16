<template>
  <li class="game" :class="{ active: game.active }">
    <div class="game__main">
      <div class="game__cover">
        <img class="img" :src="require(`@/assets/img/${game.cover}_cover.jpg`)" alt="">
      </div>
      <div class="game__info">
        <div class="game__row">
          <img class="game__ps-tag" :src="require(`@/assets/img/ps${game.ps}_tag.svg`)" alt="">
          <p class="game__time-ago">Last played 2 days ago</p>
        </div>
        <div class="game__name">{{ game.name }}</div>
        <ButtonAction type="secondary" text="Tap to Start" />
      </div>
    </div>
    <div class="game__actions">
      <div class="game__item">
        <img src="@/assets/img/control-box.svg" alt="">
        <span>Full game details</span>
      </div>
      <div class="game__item">
        <button class="button--options">options</button>
        <span>Options Menu</span>
      </div>
    </div>
  </li>
</template>

<script>
import ButtonAction from "./ButtonAction.vue"

export default {
  props: {
    game: Object
  },
  setup() {
    return {};
  },
  components: { ButtonAction }
}
</script>

<style lang="scss">
.game {
  width: 400px; 
  height: 400px;
  position: relative;

  opacity: .6;

  &.active {
    margin: 0 40px;

    width: 510px !important;
    height: 510px !important;

    &:first-child {
      margin-left: 0;
    }

    .game__info {
      display: block;
    }

    .game__actions {
      display: flex;
    }
  }

  &__cover {
    width: 100%;
    height: 100%;
  }

  &__info {
    display: none;
    margin-top: 17px;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__ps-tag {
    width: 90px;
    height: 30px;
  }

  &__time-ago {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -.42px;
  }

  &__name {
    margin: 20px 0 10px;

    font-weight: 500;
    font-size: 70px;
    line-height: 77px;
    letter-spacing: -2.97px;
  }

  &__actions {
    display: none;
    gap: 40px;
    opacity: 0;

    position: absolute;
    right: -96%;
    top: 67%;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 13px;

    cursor: pointer;

    span {
      display: block;
      font-weight: 500;
      font-size: 20px;
      line-height: 40px;
      letter-spacing: -.42px;
    }
  }
}
</style>