<template>
  <div class="overlay" v-if="open" @click="(e) => closeMenu(e)">
    <div class="container">
      <div class="menu" ref="menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-menu',
    props: {
      open: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      closeMenu(e) {
        const menu = e.target.closest('.menu');

        if (!menu) {
          this.$emit('close', false);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './VMenu.scss';
</style>