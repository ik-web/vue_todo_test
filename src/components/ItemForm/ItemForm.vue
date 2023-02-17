<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      type="text"
      class="form__input"
      v-model="inputQuery"
      :placeholder="`New ${props.itemName}`"
    />

    <app-button
      class="form__button"
    >Add {{ props.itemName }}</app-button>
  </form>
</template>

<script setup>
  import { ref, defineEmits } from 'vue';

  const emit = defineEmits(['add']);

  const props = defineProps({
    itemName: {
      type: String,
      required: true
    }
  });

  const inputQuery = ref('');

  const onSubmit = () => {
    if (inputQuery.value.trim()) {
      emit('add', inputQuery.value);
    }
  };
</script>

<style lang="scss" scoped>
  @import './ItemForm.scss';
</style>
