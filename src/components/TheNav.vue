<template>
  <nav class="nav">
    <div class="nav__control">L1</div>
    <transition-group 
      class="nav__list"
      tag="ul"
      appear
      @before-enter="beforeEnter" 
      @enter="enter"
    >
      <li 
        class="nav__item"
        :class="{ active: item.active }" 
        v-for="(item, index) in navItems" 
        :key="index"
        :data-index="index"
      >
        {{ item.name }}
      </li>
    </transition-group>
    <div class="nav__control">R1</div>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import { gsap, Power4 } from 'gsap/all'

export default {
  setup() {
    const navItems = ref([
      { name: 'Home', active: true },
      { name: 'Library' },
      { name: 'media' },
      { name: 'store' },
    ])

    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-25px)'
      el.style.opacity = 0
    }

    const enter = (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: .4,
        delay: el.dataset.index * .1,
        ease: Power4.easeOut
      })
    }

    return {
      navItems,
      beforeEnter,
      enter
    }
  }
}
</script>

<style lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  &__control {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-top: 4px;

    width: 40px;
    height: 30px;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.17px;
    background-color: #fff;
    border-radius: 50px 10px 10px 10px;

    &:last-child {
      padding-right: 5px;
      padding-left: 0;
      border-radius: 10px 50px 10px 10px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 65px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 18px 20px;
    padding-bottom: 14px;

    font-size: 24px;
    letter-spacing: .5px;
    color: #fff;
    text-transform: capitalize;
    cursor: pointer;

    &:after {
      content: '';
      width: 100%;
      height: 100%;

      background-color: transparent;
      border-radius: 40px;

      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;

      transform: scale(.9);
      transition: all .2s $ease;
    }

    &:hover,
    &.active {
      &:after {
        background-color: rgba(#000, .4);
        transform: scale(1);
      }
    }
  }
}
</style>