<template>
  <delete-confirm v-if="noteIdforDelete" />
  <app-header>
    <h1>{{ currentNoteName }}</h1>

    <app-button 
      class="note__returnButton" 
      @click="router.push('/')"
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
            @click="resetTodoChanges"
            :disabled="!currentTodoListWasChanged"
          >reset</app-button>

          <app-button
            @click="saveNote"
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
  // import { ref, onMounted } from 'vue';
  import { onMounted } from 'vue';
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
    currentTodoListWasChanged,
  } = storeToRefs(notesStore);

  const {
    setNoteIdforDelete,
    setCurrentNote,
    addNewTodo,
    resetTodoChanges
  } = notesStore;

  const requestConfirmDelete = () => {
    setNoteIdforDelete(currentNoteId);
  };

  const saveNote = () => {
    console.log('Save note item');
    router.push('/');
  };
  
  onMounted(() => {
    setCurrentNote(currentNoteId);
  });
</script>

<style lang="scss" scoped>
@import '@/styles/utils/vars';
@import '@/styles/utils/mixins';

.note {

  &__returnButton {
    align-self: start;
  }

  &__section {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    gap: 20px;
  
    max-width: 800px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  &__buttons {
    display: grid;
    grid-template-columns: 1fr auto auto;
    justify-items: center;
    gap: 20px;
    
    margin: 60px 0 20px;

    & button:first-of-type {
      justify-self: start;
    }

    & button:last-of-type {
      justify-self: end;
    }
    
    @include mobile {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
