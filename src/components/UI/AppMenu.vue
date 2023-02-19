<template>
  <div
    class="overlay"
    v-if="props.open"
    @click="(e) => closeMenu(e)"
  >
    <div class="container">
      <div class="menu" ref="menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(['close']);

  const props = defineProps({
    open: {
      type: Boolean,
      required: true
    }
  });

  const  closeMenu = (e) => {
    const menu = e.target.closest('.menu');

    if (!menu) {
      emit('close', false);
    }
  };
</script>

<style lang="scss" scoped>
@import '@/styles/utils/vars';
@import '@/styles/utils/mixins';

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;

    padding: 16px 0;
  }

  .menu {
    position: relative;
    top: 0;
    left: 100%;
    transform: translateX(-100%);
    z-index: 6;

    width: max-content;
    padding: 20px;

    background: $color_secondary;
    border-radius: $box_rounded;
    box-shadow: $box_shadow;

    @include mobile {
      width: 100%;
    }
  }
</style>
