<template>
  <main class="main main_note">
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<script setup>
  import { ref, readonly } from 'vue';
  const name = ref('app-main');
  readonly(name);
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .main {
    padding: $padding_main;
  }
</style>