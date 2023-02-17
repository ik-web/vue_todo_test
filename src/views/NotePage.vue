<template>
  <delete-confirm v-if="isDeleteConfirm" />
  <app-header>
    <h1>{{ note.name }}</h1>

    <app-button 
      class="note__returnButton" 
      @click="router.push('/')"
    >Go back</app-button>
  </app-header>
    
  <main class="main">
    <div class="container">
      <section class="note__section">
        <h2 class="title_center">Todo list</h2>

        <item-form itemName="todo" />

        <todo-list
          :changeButton="true"
          :todos="note.todos"
        />

        <div class="note__buttons">
          <app-button
            class=""
            @click="onReset"
          >reset</app-button>

          <app-button
            @click="onSaveNote"
          >save</app-button>

          <app-button
            @click="openDeleteConfirm"
            color="red"
          >delete</app-button>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useNotesStore } from '@/stores/notesStore';

  const router = useRouter();

  const store = useNotesStore();
  const note = store.getNoteById;
  const isDeleteConfirm = store.isDeleteConfirm;

  const openDeleteConfirm = () => {
    store.setIsDeleteConfirm()
  };

  const onSaveNote = () => {
    console.log('Save note item');
    router.push('/');
  };

  const onReset = () => {
    console.log('Reset changes');
  };
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
