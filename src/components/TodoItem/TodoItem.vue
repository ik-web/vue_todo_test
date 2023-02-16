<template>
  <article class="todoItem">
    <div :class="editMode ? 'editMode editMode_active' : 'editMode'">
      <input
        type="text"
        class="editMode__input"
        ref="editInput"
      >
  
      <div class="editMode__buttons">
        <v-icon-button class="editMode__button_red" @click="deleteTodoItem">
          <img src="@/assets/icon/delete.svg" alt="Delete todo icon">
        </v-icon-button>

        <v-icon-button class="editMode__button_save" @click="saveTodoQuery">
          <img src="@/assets/icon/save.svg" alt="Delete todo icon">
        </v-icon-button>
      </div>
    </div>

    <div class="todoItem__inner">
      <label class="todoItem__label">
        <input
          type="checkbox"
          class="todoItem__checkBox"
          :checked="true"
        />
  
        <div class="isCompleted">
          <p :class="isClipped && 'clipped'" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, numquam.
          </p>
        </div>
      </label>

      <v-icon-button
        v-if="changeButton"
        class="todoItem__button"
        @click="toggleEditMode"
      >
        <img src="@/assets/icon/edit.svg" alt="Change icon">
      </v-icon-button>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      changeButton: {
        type: Boolean
      },

      isClipped: {
        type: Boolean
      }
    },
    data() {
      return {
        editMode: false,
      }
    },
    methods: {
      toggleEditMode() {
        this.editMode = !this.editMode;

        if (this.editMode) {
          this.$nextTick(() => this.$refs.editInput.focus());
        }
      },
      saveTodoQuery() {
        console.log('Save todo query');
        this.toggleEditMode();
      },
      deleteTodoItem() {
        console.log('Delete todo item');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import './TodoItem.scss';
</style>
