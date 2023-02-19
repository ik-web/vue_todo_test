<template>
  <delete-confirm v-if="noteIdforDelete" />
  <app-header>
    <h1>Notes</h1>

    <div>
      <app-button @click="openItemForm">
        Create note
      </app-button>

      <app-menu :open="isOpenMenu" @close="closeItemForm">
        <item-form itemName="note" @add="handleCreateNote" />
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
  const { notes, noteIdforDelete } = storeToRefs(notesStore);
  const { addNewNote } = notesStore;
  const isOpenMenu = ref(false);

  const openItemForm = () => isOpenMenu.value = true;
  const closeItemForm = () => isOpenMenu.value = false;
  
  const handleCreateNote = (newNoteQuery) => {
    addNewNote(newNoteQuery);
    closeItemForm();
  };
</script>

<style scoped></style>
