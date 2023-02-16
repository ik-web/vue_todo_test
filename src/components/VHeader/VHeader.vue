<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'v-header',
  };
</script>

<style lang="scss" scoped>
  @import './VHeader.scss';
</style>