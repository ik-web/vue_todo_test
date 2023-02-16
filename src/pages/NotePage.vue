<template>
  <v-delete-confirm v-if="isDeleteConfirm" />
  <v-header>
    <h1>Note item title www wwwww wwwwww</h1>

    <v-button 
      class="note__returnButton" 
      @click="() => $router.push('/')"
    >Go back</v-button>
  </v-header>
    
  <main class="main">
    <div class="container">
      <section class="note__section">
        <h2 class="title_center">Todo list</h2>

        <v-item-form itemName="todo" />

        <TodosList
          :changeButton="changeButton"
        />

        <div class="note__buttons">
          <v-button
            class=""
            @click="onReset"
          >reset</v-button>

          <v-button
            @click="onSaveNote"
          >save</v-button>

          <v-button
            @click="onOpenDeleteConfirm"
            color="red"
          >delete</v-button>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        note: {
          id: 1,
          title: "Note item title",
          todos: [
            {
              id: 1,
              title: 'Todo item task 1',
              completed: true
            },
            {
              id: 2,
              title: 'Todo item task 1',
              completed: false
            }
          ]
        },
        changeButton: true,
        isDeleteConfirm: false
      }
    },
    methods: {
      onOpenDeleteConfirm() {
        this.isDeleteConfirm = true;
      },
      onSaveNote() {
        console.log('Save note item');
        this.$router.push('/');
      },
      onReset() {
        console.log('Reset changes');
      }
    }
  }
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
