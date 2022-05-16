<template>
  <header class="header header--sign-up">
    <div class="container">
      <div class="header__inner">
        <img class="header__logo" src="@/assets/img/logo.svg" />
        <RealtimeClock />
      </div>
    </div>
  </header>
</template>

<script>
import RealtimeClock from "./RealtimeClock.vue";

export default {
  setup() {
  },
  components: { RealtimeClock }
}
</script>

<style lang="scss">
.header {
  &--sign-up {
    position: static;
  }
}
</style>