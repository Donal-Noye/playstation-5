<template>
  <div class="cont-watch hero__card">
    <div class="cont-watch__header">
      <img class="cont-watch__logo" src="@/assets/img/hulu-logo.svg" alt="">
      <p class="cont-watch__title">Continue Watching</p>
    </div>
    <div class="cont-watch__cover">
      <img src="@/assets/img/archer_cover.jpg" alt="">
    </div>
    <div class="cont-watch__info">
      <div class="cont-watch__content">
        <h4 class="cont-watch__name">Archer</h4>
        <p class="cont-watch__episode">S3 + E12</p>
      </div>
      <div class="cont-watch__action">
        <img class="cont-watch__arrow" src="@/assets/img/cont-watch_arrow.svg" alt="">
        <ButtonAction type="secondary" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAction from "./ButtonAction.vue";
import { onMounted } from '@vue/runtime-core'
import { gsap, Power4 } from 'gsap/all';

export default {
  setup() {

    onMounted(() => {
      gsap.fromTo('.cont-watch__name', {
        opacity: 0,
        y: -20
      }, {
        opacity: 1.2,
        y: 0,
        duration: 1,
        ease: Power4.easeOut
      })
    })
  },
  components: { ButtonAction }
}
</script>

<style lang="scss">
.cont-watch {
  padding: 30px 40px 40px;
  grid-column: 13/17;
  width: 100%;

  &:hover {
    .cont-watch__title {
      color: rgba(#000, .5);
    }
    .cont-watch__cover {
      transform: scale(1.1);
    }
    .cont-watch__arrow {
      transform: translate(23px, -50%);
      opacity: 0;
    }
    .button {
      opacity: 1;
      transform: translate(0);
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-weight: 500;
    font-size: 20px;
    color: rgba(#fff, .5);
    transform: translateY(3px);

    transition: color .3s $ease;
  }

  &__cover {
    margin: 0 -40px;

    transition: transform .3s $ease;
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__name {
    font-weight: 700;
    font-size: 45px;
    line-height: 60px;
    letter-spacing: -1.91px;
  }

  &__episode {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -.42px;
  }

  &__action {
    position: relative;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    transition: all .3s $ease;
  }

  .button {
    opacity: 0;
    transform: translateX(23px);
    transition: all .3s $ease 50ms, background-color .2s $ease;
  }
}
</style>