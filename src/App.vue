<template>
  <div class="page" v-if="!mobile">
    <component :is="layout + '-layout'" v-if="layout" />
  </div>
  <div v-else class="mobile-message">
    <h2 class="title">Sorry, this app is not supported on Mobile Devices</h2>
    <p class="text">To use this app, please use a computer</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, ref } from '@vue/runtime-core'
import MainLayout from '@/layout/MainLayout'
import SignInLayout from '@/layout/SignInLayout'

export default {
  setup () {
    const mobile = ref(null)
    const route = useRoute()

    const checkScreen = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 1400) {
        mobile.value = true;
        return;
      }
      mobile.value = false;
    }

    window.addEventListener("resize", checkScreen);

    return {
      layout: computed(() => route.meta.layout),
      mobile
    }
  },
  components: { MainLayout, SignInLayout }
}
</script>

<style lang="scss">
.mobile-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 5px;

  .title {
    margin-bottom: 20px;

    font-weight: 500;
    font-size: 48px;
  }

  .text {
    font-size: 32px;
  }
}
</style>
