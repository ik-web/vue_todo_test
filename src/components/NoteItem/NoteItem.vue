<template>
  <article class="note">
    <header class="note__header">
      <h3 :class="isClipped ? 'note__name clipped' : 'note__name'">
        {{ props.note.name }}
      </h3>

      <icon-button class="note__button" @click="requestConfirmDelete">
        <img src="@/assets/icon/cross.svg" alt="Delete icon">
      </icon-button>
    </header>
    
    <div class="note__todoList">
      <div class="note__todoListOverlay" @click="handleTodoListClick"></div>
      <todo-list :isClipped="isClipped" :todos="[...props.note.todos].reverse()" />
    </div>
  </article>
</template>

<script setup>
  import { onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useNotesStore } from '@/stores/notesStore';

  const router = useRouter();
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

  const handleTodoListClick = () => {
    router.push(`/${props.note.id}`)
  };

  onUnmounted(() => {
    setNoteIdforDelete(null);
  });
</script>

<style lang="scss" scoped>
  @import './NoteItem.scss';
</style>
