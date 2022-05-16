<template>
  <div class="page page--sign-in">
    <TheSignInHeader />
    <main class="main">
      <div class="container">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import TheSignInHeader from "@/components/TheSignInHeader.vue";

export default {
  components: { TheSignInHeader }
}
</script>

<style lang="scss">
.page--sign-in {
  min-height: 100vh;

  background-color: #f5f5f5;
  background-image: url('../assets/img/dualsense-bg.svg');
  background-position: top -50px center;
  background-repeat: no-repeat;
  background-size: 160%;
}
</style>
