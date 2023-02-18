<template>
  <app-modal>
    <div class="confirm">
      <h3 class="confirm__message">
        Item cannot be recovered after deletion
        <br>
        Are you sure you want to delete this?
      </h3>
  
      <div class="confirm__buttons">
        <app-button @click="handleCancelDelete">
          Cancel
        </app-button>
  
        <icon-button
          color="red"
          @click="handleDeleteItem"
        >
          <img src="@/assets/icon/delete.svg" alt="Delete icon">
        </icon-button>
      </div>
    </div>
  </app-modal>
</template>

<script setup>
  import { ref, watchEffect } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useNotesStore } from '@/stores/notesStore';

  const router = useRouter();
  const route = useRoute();
  const notesStore = useNotesStore();
  const path = ref(route.path)
  const { noteIdforDelete } = storeToRefs(notesStore);
  const { setNoteIdforDelete, deleteNote } = notesStore;
  
  const handleDeleteItem = () => {
    deleteNote(noteIdforDelete.value);
    router.push('/');
  };
  
  const handleCancelDelete = () => {
    setNoteIdforDelete(null);
  };

  watchEffect(() => {
    if (path.value === '/') {
      console.log('watched');
    }
  });
</script>

<style lang="scss" scoped>
  @import './DeleteConfirm.scss';
</style>
