<template>
  <v-delete-confirm v-if="isDeleteConfirm" />
  <v-header>
    <h1>Notes</h1>

    <div>
      <v-button @click="openItemForm">
        Create note
      </v-button>

      <v-menu :open="isOpenMenu" @close="closeItemForm">
        <v-item-form itemName="note" />
      </v-menu>
    </div>
  </v-header>

  <main class="main">
    <div class="container">
      <NotesList :isClipped="isClipped" />
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        isDeleteConfirm: false,
        isOpenMenu: false,
        isClipped: true,
      }
    },
    methods: {
      openItemForm() {
        this.isOpenMenu = true;
      },
      closeItemForm(payload) {
        this.isOpenMenu = payload;
      }
    }
  }
</script>

<style scoped></style>
