<template>
  <form class="form" @submit.prevent>
    <input
      type="text"
      class="form__input"
      :placeholder="`New ${itemName}`"
    />

    <v-button
      class="form__button"
      @click="onAddNote"
    >
      Add {{ itemName }}
    </v-button>
  </form>
</template>

<script>
  export default {
    name: 'v-item-form',
    props: {
      itemName: {
        type: String,
        required: true
      }
    },
    methods: {
      onAddNote() {
        console.log('Add new item');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import './VItemForm.scss';
</style>
