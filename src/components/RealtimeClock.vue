<template>
  <p v-if="time" class="time">{{ time }}</p>
  <div v-else class="loader">
    <p class="time">00:00</p>
    <span class="spin"></span>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onBeforeUnmount } from '@vue/runtime-core'

export default {
  setup () {
    const interval = ref(null)
    const time = ref(null)

    onBeforeUnmount(() => {
      clearInterval(interval.value)
    })

    interval.value = setInterval(() => {
      time.value = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
      }).format()
    }, 1000)

    return {
      time,
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  font-size: 24px;
}

.loader {
  position: relative;
  .time {
    opacity: .1;
  }
}

.spin {
  display: inline-block;

  width: 30px;
  height: 30px;

  border: 3px solid rgba(#fff, .3);
  border-radius: 50%;
  border-top-color: #fff;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>