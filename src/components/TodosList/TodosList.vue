<template>  
  <ul class="todoList">
    <li class="todoList__item">
      <TodoItem
        class="todoList__todo"
        :isClipped="isClipped"
        :changeButton="changeButton"
      />
    </li>

    <li class="todoList__item">
      <TodoItem
        class="todoList__todo"
        :isClipped="isClipped"
        :changeButton="changeButton"
      />
    </li>

    <li class="todoList__item">
      <TodoItem
        class="todoList__todo"
        :isClipped="isClipped"
        :changeButton="changeButton"
      />
    </li>

    <li class="todoList__item">
      See more...
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodosList',
  props: {
    changeButton: {
      type: Boolean
    },

    isClipped: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
  @import './TodosList.scss';
</style>
