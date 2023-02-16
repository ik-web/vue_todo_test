<template>
  <ul class="list">
    <li class="list__item">
      <NoteItem :isClipped="isClipped" />
    </li>

    <li class="list__item">
      <NoteItem :isClipped="isClipped" />
    </li>

    <li class="list__item">
      <NoteItem :isClipped="isClipped" />
    </li>

    <li class="list__item">
      <NoteItem :isClipped="isClipped" />
    </li>

    <li class="list__item">
      <NoteItem :isClipped="isClipped" />
    </li>

    <li class="list__item">
      <NoteItem :isClipped="isClipped" />
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'NotesList',
    props: {
      isClipped: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './NotesList.scss';
</style>
