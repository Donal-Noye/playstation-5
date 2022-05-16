<template>
  <div class="hero grid">
    <div class="hero__title">
      <h1>Jump back in!</h1>
      <div class="hero-pag">
        <transition-group 
          class="hero-pag__list"
          tag="ul"
          appear
          @before-enter="beforeEnter" 
          @enter="enter"
        >
          <li 
            class="hero-pag__item" 
            v-for="(item, index) in 3" 
            :key="index"
            :data-index="index"
          >
            {{ item }}
          </li>
        </transition-group>
        <div class="hero-pag__control">
          <img class="arrow" src="@/assets/img/control-arrow.svg" alt="">
          <span>R</span>
          <img class="arrow" src="@/assets/img/control-arrow.svg" alt="">
        </div>
      </div>
    </div>
    <ResumeGame />
    <ContWatch />
  </div>
</template>

<script>
import ResumeGame from "./ResumeGame";
import ContWatch from "./ContWatch.vue";
import { onMounted } from '@vue/runtime-core';
import { gsap, Power4 } from 'gsap/all';

export default {
  setup() {
    const tl = gsap.timeline()

    const beforeEnter = (el) => {
      el.style.transform = 'scale(0)'
    }

    const enter = (el) => {
      gsap.to(el, {
        scale: 1,
        duration: .8,
        delay: el.dataset.index * .1,
        ease: Power4.easeOut
      })
    }

    onMounted(() => {
      tl.fromTo('.hero__title', {
        opacity: 0,
        x: -100
      }, {
        opacity: 1.2,
        x: 0,
        duration: 1,
        ease: Power4.easeOut
      })
    })

    return {
      beforeEnter, enter
    }
  },
  components: { ResumeGame, ContWatch }
}
</script>

<style lang="scss">
.hero {
  margin-top: 266px;
  align-items: flex-end;
  position: relative;

  &__title {
    grid-column: 1 / span 4;
    transform: translateY(-90px);

    h1 {
      font-weight: 500;
      font-size: 100px;
      line-height: 114px;
      letter-spacing: -2.38px;
      color: #fff;
    }
  }
}

.hero-pag {
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 30px;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 34px);
    gap: 20px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 34px;

    font-size: 0;
    border: 3px solid #fff;
    border-radius: 50%;

    &:first-child {
      &:after {
        display: block;
      }
    }

    &:after {
      content: '';
      display: none;
      width: 12px;
      height: 12px;

      background-color: #fff;
      border-radius: 50%;
    }
  }

  &__control {
    display: flex;
    align-items: center;
    gap: 8px;

    .arrow:last-child {
      transform: rotate(180deg);
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 30px;
      height: 30px;

      font-weight: 800;
      font-size: 14px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
}

.hero__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  height: 450px;

  color: #fff;
  background-color: rgba(#000, .6);

  transition: all .3s $ease;

  &:hover {
    height: 480px;

    color: #000;
    background-color: #fff;
  }
}
</style>