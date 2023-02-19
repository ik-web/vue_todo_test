<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      type="text"
      class="form__input"
      v-model="inputQuery"
      :placeholder="`New ${props.itemName}`"
      ref="input"
      :maxlength="props.maxlength"
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
    },
    maxlength: {
      type: String,
    },
    isAutoFocus: {
      type: Boolean
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
    if (props.isAutoFocus) {
      input.value.focus();
    }
  });
</script>

<style lang="scss" scoped>
  @import './ItemForm.scss';
</style>
