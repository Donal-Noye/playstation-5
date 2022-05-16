<template>
  <button class="button" :class="type">
    <span class="icon">
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path fill="currentColor" fill-rule="evenodd" d="M11.80777558 1.17087466c.25629422.2562943.25629422.67245686 0 .92875616L7.90740575 6.00000188l3.90036983 3.90037105c.25629923.2562943.25629923.67246188 0 .92875617l-.97864987.97865018c-.25629421.2562943-.67245665.2562943-.92875588 0L6 7.90740822l-3.90037484 3.90037106c-.25629422.2562943-.67245665.2562943-.92875087 0l-.97864987-.97865018c-.25629923-.2562943-.25629923-.67246187 0-.92875617l3.90036983-3.90037105L.19222442 2.0996258c-.25629421-.25629429-.25629421-.67245686 0-.92875115l.97864987-.97865018c.25629422-.2562993.67245665-.2562993.92875588 0L6 4.09259553 9.90036983.19222448c.25629923-.2562993.67245665-.2562993.92875588 0l.97864987.97865018z"/>
      </svg>
    </span>
    <p v-if="text" class="text">{{ text }}</p>
    <span v-else class="icon-right">
      <svg viewBox="0 0 23.808 28">
        <path fill-rule="evenodd" d="M1.0238568 0l.26701018.0160608.26299627.11242561L23.1395801 12.9771274c.66854049.3995105.66854049 1.36719819 0 1.76668814L1.55386325 27.59245653C.86928765 28 0 27.50612908 0 26.70908676V1.01180478C.02810666.55407452.29110395.14251713.76089652.0180395L1.0238568 0z"/>
      </svg>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    text: String
  },
}
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 0 20px 0 13px;

  height: 60px;

  border-radius: 60px;

  transition: opacity .3s $ease 50ms, color .2s $ease, background-color .15s $ease, transform .2s $ease 100ms;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 34px;
    height: 34px;

    border-radius: 50%;
  }

  .icon-right {
    display: flex;

    width: 22px;
    height: 26px;
    fill: #276EE6;
  }

  .text {
    padding-top: 3px;
    
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
  }

  &.primary {
    color: #fff;
    background-color: #276ee6;

    &:hover {
      background-color: darken(#276ee6, 10%);
    }

    &:active {
      background-color: lighten(#276ee6, 2%);
    }

    .icon {
      background-color: #fff;
      color: #276ee6;
    }
  }

  &.secondary {
    color: #276ee6;
    background-color: rgba(#276ee6, .1);

    &:hover {
      background-color: rgba(#276ee6, .2);
    }

    &:active {
      background-color: rgba(#276ee6, .08);
    }
    .icon {
      background-color: #276ee6;
      color: #fff;
    }
  }
}
</style>