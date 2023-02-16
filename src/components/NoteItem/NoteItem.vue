<template>
  <article class="note">
    <v-header class="note__header">
      <h3 :class="isClipped && 'clipped'">
        Note item title www www
      </h3>

      <v-icon-button class="note__button" @click="openDeleteConfirm">
        <img src="@/assets/icon/cross.svg" alt="Delete icon">
      </v-icon-button>
    </v-header>
    
    <div class="note__todoList">
      <div class="note__todoListOverlay" @click="$router.push(`/note/${1}`)"></div>
      <TodosList :isClipped="isClipped" />
    </div>
  </article>
</template>

<script>
  export default {
    name: 'NoteItem',
    props: {
      isClipped: {
        type: Boolean
      }
    },
    methods: {
      openDeleteConfirm() {
        console.log('Open delete confirm window');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './NoteItem.scss';
</style>
