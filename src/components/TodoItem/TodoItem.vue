<template>
  <article class="todoItem">
    <div :class="editMode && 'editMode__overlay'" @click="deactivatedEditMode"></div>
    <div :class="editMode ? 'editMode editMode_active' : 'editMode'">
      <input
        type="text"
        class="editMode__input"
        ref="editInput"
        v-model="todoQuery"
      >
  
      <div class="editMode__buttons">
        <icon-button class="editMode__button_red" @click="handleDeleteTodoItem">
          <img src="@/assets/icon/delete.svg" alt="Delete todo icon">
        </icon-button>

        <icon-button class="editMode__button_save" @click="handleSaveTodoQueryChanges">
          <img src="@/assets/icon/save.svg" alt="Save todo icon">
        </icon-button>
      </div>
    </div>

    <div class="todoItem__inner">
      <label class="todoItem__label">
        <input
          type="checkbox"
          class="todoItem__checkBox"
          :checked="props.todo.completed"
          @change="handleChangeTodoProgress"
        />
  
        <div :class="props.todo.completed && 'isCompleted'">
          <p :class="props.isClipped ? 'todoItem__name clipped' : 'todoItem__name'" >
            {{ props.todo.name }}
          </p>
        </div>
      </label>

      <icon-button
        v-if="props.changeButton"
        class="todoItem__button"
        @click="activateEditMode"
      >
        <img src="@/assets/icon/edit.svg" alt="Edit mode icon">
      </icon-button>
    </div>
  </article>
</template>

<script setup>
  import { ref, onUpdated } from 'vue';
  import { useNotesStore } from '@/stores/notesStore';

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

  const notesStore = useNotesStore();
  const {
    deleteTodoItem,
    saveTodoQueryChanges,
    changeTodoProgress
  } = notesStore;

  const editMode = ref(false);
  const editInput = ref();
  const todoQuery = ref('');
  
  const activateEditMode = () => {
    editMode.value = true;
    todoQuery.value = props.todo.name;
  };

  const deactivatedEditMode = () => {
    editMode.value = false;
  };

  const handleSaveTodoQueryChanges = () => {
    const newTodoQuery = todoQuery.value.trim();

    if (props.todo.name !== newTodoQuery) {
      saveTodoQueryChanges(props.todo.id, newTodoQuery);
    }

    deactivatedEditMode();
  };

  const handleChangeTodoProgress = () => {
    changeTodoProgress(props.todo.id);
  };

  const handleDeleteTodoItem = () => {
    deleteTodoItem(props.todo.id);
  };
  
  onUpdated(() => {
    editInput.value.focus();
  });
</script>

<style lang="scss" scoped>
  @import './TodoItem.scss';
</style>
