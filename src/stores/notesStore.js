import { ref } from 'vue';
import { defineStore } from 'pinia';

import { notesData } from '@/data/notesData';

const initialNotes = notesData;

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref(initialNotes);
  const currentNote = ref({});
  const noteIdforDelete = ref(null);
  
  const addNewNote = (newNote) => {
    notes.value.push(newNote);
  };

  const deleteNote = (id) => {
    notes.value = notes.value
    .filter((note) => note.id !== id);

    noteIdforDelete.value = null;
  };

  const setCurrentNote = (id) => {
    currentNote.value = notes.value
    .find((note) => note.id === id);
  }

  const setNoteIdforDelete = (id) => {
    noteIdforDelete.value = id;
  };

  return {
    notes,
    currentNote,
    noteIdforDelete,

    addNewNote,
    setNoteIdforDelete,
    deleteNote,
    setCurrentNote
  }
});
