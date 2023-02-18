<template>
  <article class="note">
    <app-header class="note__header">
      <h3 :class="isClipped && 'clipped'">
        {{ props.note.name }}
      </h3>

      <icon-button class="note__button" @click="requestConfirmDelete">
        <img src="@/assets/icon/cross.svg" alt="Delete icon">
      </icon-button>
    </app-header>
    
    <div class="note__todoList">
      <div class="note__todoListOverlay" @click="$router.push(`/${note.id}`)"></div>
      <todo-list :isClipped="isClipped" :todos="props.note.todos" />
    </div>
  </article>
</template>

<script setup>
  import { useNotesStore } from '@/stores/notesStore';

  const notesStore = useNotesStore();
  const { setNoteIdforDelete } = notesStore;

  const props = defineProps({
    note: {
      type: Object,
      required: true
    },
    isClipped: {
      type: Boolean
    }
  });

  const requestConfirmDelete = () => {
    setNoteIdforDelete(props.note.id);
  };
</script>

<style lang="scss" scoped>
  @import './NoteItem.scss';
</style>
