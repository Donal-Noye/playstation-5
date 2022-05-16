<template>
  <div class="sign-in">
    <div class="grid">
      <div class="sign-in__content">
        <sup class="sign-in__suptitle">DualSense connected</sup>
        <h2 class="sign-in__title">Who is using the controller?</h2>
      </div>
    </div>
    <div class="sign-in__users">
      <UserCard 
        :avatar="'create-user.svg'"
        :name="'Create User'"
        :text="'Add a new user to this console'"
      />
      <transition-group 
        appear 
        @before-enter="beforeEnter" 
        @enter="enter"
      >
        <UserCard 
          v-for="(user, index) in users" 
          :key="index" 
          :data-index="index"
          :avatar="user.avatar" 
          :name="user.username" 
          :lastOnline="user.lastOnline"
          :active="user.active"
          :color="user.color"
        />
      </transition-group>
      <UserCard 
        :avatar="'guest_user.svg'"
        :name="'Play as Guest'"
        :text="'Data will be deleted after you log out'"
      />
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import { ref } from '@vue/reactivity';
import { gsap, Power4 } from 'gsap/all'
import { onMounted } from '@vue/runtime-core';

export default {
  setup() {
    const users = ref([
      {
        avatar: 'jo-accord_user.jpg',
        username: 'Jo-Accord',
        lastOnline: '3 hours ago',
        active: true,
        color: 'orange'
      },
      {
        avatar: 'evebanigo_user.jpg',
        username: 'evebanigo',
        lastOnline: 'yesterday',
        color: 'blue'
      },
    ])

    const beforeEnter = (el) => {
      el.style.transform = 'translateY(80px)'
    }

    const enter = (el) => {
      gsap.to(el, {
        y: 0,
        duration: 1.2,
        delay: el.dataset.index * .2,
        ease: Power4.easeOut
      })
    }

    onMounted(() => {
      gsap.fromTo('.sign-in__suptitle', {
        opacity: 0,
        y: -45
      }, {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: Power4.easeOut,
      })
      gsap.fromTo('.sign-in__title', {
        opacity: 0,
        y: -35
      }, {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: Power4.easeOut,
      })
    })

    return { users, beforeEnter, enter }
  },
  components: { UserCard }
}
</script>

<style lang="scss">
.sign-in {
  &__content {
    display: grid;
    row-gap: 20px;
    grid-column: 5 / 16;
  }

  &__suptitle {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -.75px;
  }

  &__title {
    font-weight: 700;
    font-size: 70px;
    letter-spacing: -3px;
  }

  &__users {
    display: flex;
    align-items: flex-end;
    margin-top: 70px;
    gap: 40px;
  }
}
</style>