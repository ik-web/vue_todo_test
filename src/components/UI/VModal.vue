<template>
  <div class="overlay">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-modal'
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .overlay {
    @include flex_center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;

    padding: 16px;
    background: $color_overlay;
  }

  .modal {
    padding: 32px;

    background: $color_secondary;
    border-radius: 4px;
    box-shadow: $box_shadow;
  }
</style>