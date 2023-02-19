<template>
  <div class="wrapper">
    <h2 class="message">
      <slot></slot>
    </h2>
  </div>
</template>

<script setup>
  import { ref, readonly } from 'vue';
  const name = ref('app-message');
  readonly(name);
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .wrapper {
    @include flex_center;
    width: 100%;
    height: 100%;
  }
  .message {
    // font-size: 40px;
    text-align: center;
    color: $color_dark;
  }
</style>