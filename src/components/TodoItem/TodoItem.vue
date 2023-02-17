<template>
  <article class="todoItem">
    <div :class="editMode ? 'editMode editMode_active' : 'editMode'">
      <input
        type="text"
        class="editMode__input"
        ref="editInput"
      >
  
      <div class="editMode__buttons">
        <icon-button class="editMode__button_red" @click="deleteTodoItem">
          <img src="@/assets/icon/delete.svg" alt="Delete todo icon">
        </icon-button>

        <icon-button class="editMode__button_save" @click="saveTodoQuery">
          <img src="@/assets/icon/save.svg" alt="Delete todo icon">
        </icon-button>
      </div>
    </div>

    <div class="todoItem__inner">
      <label class="todoItem__label">
        <input
          type="checkbox"
          class="todoItem__checkBox"
          :checked="props.todo.completed"
        />
  
        <div :class="props.todo.completed && 'isCompleted'">
          <p :class="props.isClipped && 'clipped'" >
            {{ props.todo.name }}
          </p>
        </div>
      </label>

      <icon-button
        v-if="props.changeButton"
        class="todoItem__button"
        @click="toggleEditMode"
      >
        <img src="@/assets/icon/edit.svg" alt="Change icon">
      </icon-button>
    </div>
  </article>
</template>

<script setup>
  import { ref,onUpdated } from 'vue';

  const props = defineProps({
    todo: {
      type: Object,
      required: true
    },
    changeButton: {
      type: Boolean
    },

    isClipped: {
      type: Boolean
    }
  });

  const editMode = ref(false);
  const editInput = ref();

  const toggleEditMode = () => {
    editMode.value = !editMode.value;

    if (editMode.value) {
      onUpdated(() => editInput.value.focus());
    }
  }

  const saveTodoQuery = () => {
    console.log('Save todo query');
    toggleEditMode();
  }

  const deleteTodoItem = () => {
    console.log('Delete todo item');
  };
</script>

<style lang="scss" scoped>
  @import './TodoItem.scss';
</style>
