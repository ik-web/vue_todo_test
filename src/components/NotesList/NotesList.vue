<template>
  <ul class="list">
    <li
      class="list__item"
      v-for="note of props.notes"
      :key="note.id"
    >
      <note-item :isClipped="isClipped" :note="note" />
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    notes: {
      type: Array,
      required: true
    },
    isClipped: {
      type: Boolean
    }
  });
</script>

<style lang="scss" scoped>
  @import './NotesList.scss';
</style>
