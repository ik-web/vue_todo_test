<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { ref, readonly } from 'vue';
  const name = ref('app-header');
  readonly(name);
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    @include header_bg;
    color: $color_secondary;
    box-shadow: $box_shadow;

    &__inner {
      @include flex_between;
      gap: 16px;
      min-height: $height_header;
      padding: 8px 0;

      @include mobile {
        gap: 12px;
      }
    }
  }
</style>
