<template>
  <ul class="games">
    <GamesItem v-for="game in games" :key="game" :game="game" />
  </ul>
</template>

<script>
import { gsap, ScrollTrigger, Power4 } from 'gsap/all';
import GamesItem from "./GamesItem.vue";

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      games: [
        {
          cover: 'horizon-zero-dawn',
          name: 'Horizon Zero Dawn II',
          ps: '5'
        },
        {
          cover: 'sekiro',
          name: 'Sekiro: Shadows Die Twice',
          ps: '4',
          active: true
        },
        {
          cover: 'rdr',
          name: 'Red Dead Redemption II',
          ps: '5',
        },
        {
          cover: 'apex',
          name: 'Apex Legends',
          ps: '4',
        },
      ],
    }
  },
  mounted() {
    gsap.defaults({
      ease: Power4.easeOut,
      duration: 1,
    });

    gsap.to('.game', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'center center',
        scrub: true
      },
      opacity: 1,
    })
    gsap.to('.bg', {
      scrollTrigger: {
        trigger: '.games',
        start: 'top center',
        scrub: true,
      },
      height: '21%',
      backgroundColor: '#fff',
    })
    gsap.to('.games', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'center center',
        scrub: true
      },
      gap: 0
    })
    gsap.to('.game', {
      scrollTrigger: {
        trigger: '.games',
        start: 'top center',
        scrub: true,
      },
      width: '300px',
      height: '300px'
    })
    gsap.from('.game__info', {
      scrollTrigger: {
        trigger: '.game__info',
        start: 'center 80%',
        end: '20% 40%',
        scrub: true,
      },
      opacity: 0,
    })
    gsap.from('.game__row', {
      scrollTrigger: {
        trigger: '.game__info',
        start: 'center 80%',
        end: '20% 40%',
        scrub: true,
      },
      x: -55
    })
    gsap.from('.game__name', {
      scrollTrigger: {
        trigger: '.game__info',
        start: 'center 80%',
        end: '20% 40%',
        scrub: true,
      },
      x: -55
    })
    gsap.from('.game__info .button', {
      scrollTrigger: {
        trigger: '.game__info',
        start: 'center 80%',
        end: '20% 40%',
        scrub: true,
      },
      opacity: 0
    })
    gsap.to('.game__actions', {
      scrollTrigger: {
        trigger: '.games',
        start: 'top center',
        end: 'center center', 
        scrub: true,
      },
      opacity: 1,
    })
  },
  components: { 
    GamesItem, 
  }
}
</script>

<style lang="scss">
.games {
  display: flex;
  gap: 40px;

  height: 90vh;

  margin-top: 90px;
}
</style>