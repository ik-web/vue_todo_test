<template>
  <delete-confirm v-if="noteIdforDelete" />
  <app-header>
    <h1 class="note__name">{{ currentNoteName }}</h1>

    <app-button 
      class="note__returnButton" 
      @click="hundleGoBackButtonClick"
    >Go back</app-button>
  </app-header>
    
  <main class="main">
    <div class="container">
      <section class="note__section">
        <h2 class="title_center">Todo list</h2>

        <item-form itemName="todo" @add="addNewTodo" />

        <todo-list
          :changeButton="true"
          :todos="currentNoteTodosCopy"
        />

        <div class="note__buttons">
          <app-button
            class=""
            @click="resetNoteChanges"
            :disabled="!isCurrentNoteChanged"
          >reset</app-button>

          <app-button
            @click="saveNoteChanges"
            :disabled="!isCurrentNoteChanged"
          >save</app-button>

          <app-button
            @click="requestConfirmDelete"
            color="red"
          >delete</app-button>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useNotesStore } from '@/stores/notesStore';

  const router = useRouter();
  const route = useRoute();
  const currentNoteId = +route.params.noteId;

  const notesStore = useNotesStore();

  const {
    noteIdforDelete,
    currentNoteName,
    currentNoteTodosCopy,
    isCurrentNoteChanged,
  } = storeToRefs(notesStore);

  const {
    setNoteIdforDelete,
    setCurrentNote,
    addNewTodo,
    resetNoteChanges,
    saveNoteChanges
  } = notesStore;

  const requestConfirmDelete = () => {
    setNoteIdforDelete(currentNoteId);
  };

  const hundleGoBackButtonClick = () => {
    router.push('/');
  };
  
  onMounted(() => {
    setCurrentNote(currentNoteId);
  });

  onUnmounted(() => {
    resetNoteChanges();
    setNoteIdforDelete(null);
  });
</script>

<style lang="scss" scoped>
  @import './NotePage.scss';
</style>
