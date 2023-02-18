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
  @import './AppMenu.scss';
</style>
