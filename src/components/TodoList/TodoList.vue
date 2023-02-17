<template>  
  <ul class="todoList">
    <li
      class="todoList__item"
      v-for="todo of handledTodos"
      :key="todo.id"
    >
      <todo-item
        class="todoList__todo"
        :isClipped="props.isClipped"
        :changeButton="props.changeButton"
        :todo="todo"
      />
    </li>

    <li
      class="todoList__item"
      v-if="props.isClipped && props.todos.length > 4"
    >See more...</li>
  </ul>
</template>

<script setup>
  import { computed } from 'vue';
  import { handleTodos } from './utils';

  const props = defineProps({
    todos: {
      type: Array,
      required: true
    },
    changeButton: {
      type: Boolean
    },
    isClipped: {
      type: Boolean
    }
  });

  const handledTodos = computed(() => (
    handleTodos(props.todos, props.isClipped)
  ));
</script>

<style lang="scss" scoped>
  @import './TodoList.scss';
</style>
