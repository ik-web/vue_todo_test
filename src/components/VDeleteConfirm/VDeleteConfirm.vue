<template>
  <v-modal>
    <div class="confirm">
      <h3 class="confirm__message">
        Item cannot be recovered after deletion
        <br>
        Are you sure you want to delete this?
      </h3>
  
      <div class="confirm__buttons">
        <v-button @click="cancelDelete">
          Cancel
        </v-button>
  
        <v-icon-button
          color="red"
          @click="deleteItem"
        >
          <img src="@/assets/icon/delete.svg" alt="Delete icon">
        </v-icon-button>
      </div>
    </div>
  </v-modal>
</template>

<script>
  export default {
    name: 'v-delete-confirm',
    methods: {
      deleteItem() {
        console.log('Permanent delete item');
        this.$router.push('/');
      },
      cancelDelete() {
        console.log('Cancel delete item');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './VDeleteConfirm.scss';
</style>