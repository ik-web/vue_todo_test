<template>
  <app-modal>
    <div class="confirm">
      <h3 class="confirm__message">
        Item cannot be recovered after deletion
        <br>
        Are you sure you want to delete this?
      </h3>
  
      <div class="confirm__buttons">
        <app-button @click="cancelDelete">
          Cancel
        </app-button>
  
        <icon-button
          color="red"
          @click="deleteItem"
        >
          <img src="@/assets/icon/delete.svg" alt="Delete icon">
        </icon-button>
      </div>
    </div>
  </app-modal>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { useNotesStore } from '@/stores/notesStore';

  const router = useRouter();
  const notesStore = useNotesStore();
  const { selectedNoteId } = storeToRefs(notesStore);
  const { setIsDeleteConfirm, deleteNote } = notesStore;

  const deleteItem = () => {
    deleteNote(selectedNoteId.value);
    router.push('/');
  };

  const cancelDelete = () => {
    setIsDeleteConfirm();
  };
</script>

<style lang="scss" scoped>
  @import './DeleteConfirm.scss';
</style>