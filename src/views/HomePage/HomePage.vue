<template>
  <delete-confirm v-if="noteIdforDelete" />
  <app-header>
    <div class="home__headerLeftBlock">
      <div class="home__headerLogo">
        <img src="@/assets/img/logo.png" alt="Logo">
      </div>
      
      <h1 class="home__headerTitle">
        Notes
      </h1>
    </div>

    <div>
      <app-button @click="openItemForm">
        Create note
      </app-button>

      <app-menu :open="isOpenMenu" @close="closeItemForm">
        <item-form
          itemName="note"
          @add="handleCreateNote"
          isAutoFocus
          maxlength="44"
        />
      </app-menu>
    </div>
  </app-header>

  <app-main class="home__main">
    <app-message v-if="!notes.length">
      Create your first note
    </app-message>

    <notes-list :isClipped="true" :notes="[...notes].reverse()" />
  </app-main>
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

<style  lang="scss" scoped>
  @import './HomePage.scss';
</style>
