import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { notesData } from '@/data/notesData';

const initialValue = notesData;

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref(initialValue);
  const isDeleteConfirm = ref(false);
  const selectedNoteId = ref(0);
  
  const addNewNote = (newNote) => {
    notes.value.push(newNote);
  };

  const setIsDeleteConfirm = () => {
    isDeleteConfirm.value = !isDeleteConfirm.value;
  };

  const deleteNote = (id) => {
    notes.value = notes.value.filter((note) => note.id !== id);
    isDeleteConfirm.value = false;
  }

  const setSelectedNoteId = (id) => {
    selectedNoteId.value = id;
  };

  const getNoteById = computed(() => (
    notes.value.find((note) => note.id === selectedNoteId.value)
  ));

  return {
    notes,
    selectedNoteId,
    isDeleteConfirm,
    getNoteById,
    addNewNote,
    setSelectedNoteId,
    setIsDeleteConfirm,
    deleteNote
  }
});
