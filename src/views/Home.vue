<template>
  <div class="home">
    <div class="home__content">
      <div class="container">
        <TheNav />
        <Hero />
        <Games />
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import TheNav from "../components/TheNav.vue";
import Hero from "../components/Hero.vue";
import Games from "../components/Games.vue";
import { onMounted } from '@vue/runtime-core';
import { gsap, Power4 } from 'gsap/all';

export default {
  setup() {
    onMounted(() => {
      gsap.fromTo('.bg', {
        scale: 1.1
      }, {
        scale: 1,
        duration: 1.2,
        ease: Power4.easeOut
      })
    })
  },
  components: { TheNav, Hero, Games }
}
</script>

<style lang="scss">
.home {
  padding-top: $header-height;

  min-height: 100vh;

  position: relative;

  &__content {
    position: relative;
    z-index: 2;
  }
}

.bg {
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-image: url('../assets/img/horizon-zero-dawn_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;

  &:after {
    content: '';
    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, transparent 0%, #000 100%);

    position: absolute;
    bottom: 0;
    left: 0;

    pointer-events: none;
  }
}
</style>