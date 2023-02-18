<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      type="text"
      class="form__input"
      v-model="inputQuery"
      :placeholder="`New ${props.itemName}`"
      ref="input"
    />

    <app-button
      class="form__button"
    >Add {{ props.itemName }}</app-button>
  </form>
</template>

<script setup>
  import { ref, defineEmits, onMounted } from 'vue';
  
  const props = defineProps({
    itemName: {
      type: String,
      required: true
    }
  });
  
  const input = ref();
  const emit = defineEmits(['add']);
  const inputQuery = ref('');

  const onSubmit = () => {
    if (inputQuery.value.trim()) {
      emit('add', inputQuery.value.trim());
      inputQuery.value = '';
    }
  };
  
  onMounted(() => {
    input.value.focus()
  })
</script>

<style lang="scss" scoped>
  @import './ItemForm.scss';
</style>
