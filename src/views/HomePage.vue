<template>
  <delete-confirm v-if="isDeleteConfirm" />
  <app-header>
    <h1>Notes</h1>

    <div>
      <app-button @click="openItemForm">
        Create note
      </app-button>

      <app-menu :open="isOpenMenu" @close="closeItemForm">
        <item-form itemName="note" @add="createNote" />
      </app-menu>
    </div>
  </app-header>

  <main class="main">
    <div class="container">
      <notes-list :isClipped="true" :notes="notes" />
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia';
  import { useNotesStore } from '@/stores/notesStore';

  const notesStore = useNotesStore();
  const { notes, isDeleteConfirm } = storeToRefs(notesStore);
  const { addNewNote } = notesStore;
  const isOpenMenu = ref(false);
  const openItemForm = () => isOpenMenu.value = true;
  const closeItemForm = () => isOpenMenu.value = false;
  
  const createNote = (newNoteQuery) => {
        const totalNotes = notes.value.length;
        const newNoteId = totalNotes ? notes.value[totalNotes - 1].id + 1 : 1;
        const newNote = {
          id: newNoteId,
          name: newNoteQuery,
          todos: []
        };

        addNewNote(newNote);
        closeItemForm();
  };
</script>

<style scoped></style>
