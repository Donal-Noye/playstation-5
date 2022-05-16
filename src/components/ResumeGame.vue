<template>
  <div class="resume-game hero__card">
    <div class="resume-game__info">
      <div class="resume-game__cover">
        <img src="@/assets/img/horizon-zero-dawn_cover.jpg" alt="" />
      </div>
      <div class="resume-game__content">
        <svg width="60" height="20" viewBox="0 0 60 20">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M58 .00000572H2c-1.10383004 0-2 .89616996-2 2v16c0 1.10383034.89616996 2 2 2h56c1.10382843 0 2-.89616966 2-2v-16c0-1.10383004-.89617157-2-2-2zM6.39233685 4.9470396v1.15853405H17.3885994c.87639427 0 1.58685302.7104578 1.58685302 1.5868988 0 .87639523-.71045875 1.58689881-1.58685302 1.58689881H9.12713528c-1.51034832 0-2.73479843 1.22440434-2.73479843 2.73479843v3.03880215h2.18550968v-3.06901073c0-.85384179.69216823-1.54596425 1.54601097-1.54596425h8.29167175c1.51626015 0 2.74547768-1.22921752 2.7454319-2.7455244 0-1.5162611-1.22917175-2.74543286-2.7454319-2.74543286H6.39233685zM27.251091 7.68188381c0-1.51043987 1.22440338-2.7348442 2.73479843-2.7348442h6.35896302v1.15853404H30.9826107c-.85384178 0-1.54601097.69216824-1.54601097 1.5460105v4.6664977c0 1.51043988-1.22440338 2.73484421-2.73488998 2.73488999h-6.26095963v-1.1586256h5.26423836c.85384178.00004577 1.54605675-.69216824 1.54610252-1.54601097V7.6818838zM38.4509163 8.72064018V4.9470396H52.8365097v1.15853405H40.6364708v2.48360062c0 .3811512.30900192.69015122.69019699.690197h9.0191841c1.59432603 0 2.88679887 1.29247474 2.88679887 2.88684653 0 1.59427834-1.29251862 2.88670826-2.88679886 2.88675404H38.45091629v-1.1586256h10.8679123c.95446014 0 1.72822189-.77371598 1.72822189-1.72817421-.00004578-.9544592-.77380753-1.72817517-1.7282219-1.72817517h-9.1506462c-.9485016 0-1.71731187-.76890277-1.71726609-1.71735668z"
          />
        </svg>
        <h2 class="resume-game__name">Horizon Zero Dawn II</h2>
        <p class="resume-game__developer">By Guerrilla Games</p>
        <ButtonAction type="secondary" text="Tap to resume" />
      </div>
    </div>
    <transition-group 
      tag="div" 
      appear 
      class="resume-game__trophies"
      @before-enter="beforeEnter" 
      @enter="enter"
    >
      <div class="resume-game-trophy" :key="1" :data-index="1">
        <div class="resume-game-trophy__img">
          <img src="@/assets/img/banük-legend_trophy.jpg" alt="" />
          <img
            class="resume-game-trophy__cup"
            src="@/assets/img/gold-cup.png"
            alt=""
          />
        </div>
        <div class="resume-game-trophy__content">
          <h6 class="resume-game-trophy__title">Last earned trophy</h6>
          <h5 class="resume-game-trophy__name">Banük Legend</h5>
        </div>
      </div>
      <div class="resume-game-trophy" :key="2" :data-index="2">
        <div class="resume-game-trophy__img">
          <img src="@/assets/img/chasing-heights_trophy.jpg" alt="" />
          <img
            class="resume-game-trophy__cup"
            src="@/assets/img/silver-cup.png"
            alt=""
          />
        </div>
        <div class="resume-game-trophy__content">
          <h6 class="resume-game-trophy__title">Top earned trophy</h6>
          <h5 class="resume-game-trophy__name">Chasing heights</h5>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import ButtonAction from "./ButtonAction.vue"
import { onMounted } from '@vue/runtime-core'
import { gsap, Power4 } from 'gsap/all';

export default {
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-25px)'
      el.style.opacity = 0
    }

    const enter = (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: .4,
        delay: el.dataset.index * .2,
        ease: Power4.easeOut
      })
    }

    onMounted(() => {
      gsap.fromTo('.resume-game__name', {
        y: -25
      }, {
        y: 0,
        duration: .8,
        ease: Power4.easeOut
      })

      gsap.fromTo('.resume-game-trophy', {
        y: 25
      }, {
        y: 0,
        duration: .8,
        ease: Power4.easeOut
      })
    })

    return {
      beforeEnter,
      enter
    }
  },
  components: { ButtonAction }
}
</script>

<style lang="scss">
.resume-game {
  padding: 30px;
  grid-column: 5 / 13;

  &:hover {
    .resume-game__cover {
      margin-top: -60px;

      width: 370px;
      height: 370px;
    }

    .resume-game__developer {
      opacity: 0;
      transform: translateY(25px);
    }

    .button {
      opacity: 1;
      transform: translateY(-15px);

      transition: transform .3s $ease 150ms, opacity .3s $ease 150ms, background-color .2s $ease;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 40px;
  }

  &__cover {
    width: 290px;
    height: 290px;

    transition: all .3s $ease;

    img {
      display: block;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    margin: 20px 0 12px;

    font-weight: 500;
    font-size: 70px;
    line-height: 70px;
    letter-spacing: -2.97px;
  }

  &__developer {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: -.42px;
    color: rgba(#fff, .6);

    transition: all .3s $ease;
  }

  &__trophies {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .button {
    opacity: 0;
    transform: translateY(0);
    overflow: hidden;

    transition: all .3s $ease;
  }
}

.resume-game-trophy {
  display: flex;
  align-items: center;
  gap: 20px;

  &__img {
    position: relative;

    img:last-child {
      position: absolute;
      bottom: -13px;
      right: -7px;
    }
  }

  &__title {
    font-size: 16px;
    line-height: 27px;
    letter-spacing: -.42px;
  }

  &__name {
    margin-top: 5px;

    font-weight: 500;
    font-size: 28px;
    letter-spacing: -.75px;
  }
}
</style>