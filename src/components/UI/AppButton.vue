<template>
  <button :class="props.color === 'red' ? 'button button_red' : 'button'">
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    color: {
      type: String
    }
  });
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .button {
    @include button;
  }
</style>
