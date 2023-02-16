<template>
  <button :class="color === 'red' ? 'button button_red' : 'button'" >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'v-icon-button',
    props: {
      color: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .button {
    @include icon_button;
  }
</style>
