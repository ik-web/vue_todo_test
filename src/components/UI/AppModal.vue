<template>
  <div class="overlay">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref, readonly } from 'vue';
  const name = ref('app-modal');
  readonly(name);
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

    animation: showModal $transition_behavior;

    @keyframes showModal{
      0% {
        transform: scale(0.01);
      }

      100% {
        transform: scale(1);
      }
    }
  }
</style>