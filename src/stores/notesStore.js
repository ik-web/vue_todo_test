import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { notesData } from '@/data/notesData';
import { getNewItemId } from './utils';

const initialNotes = notesData;

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref(initialNotes);
  const currentNote = ref(null);
  const noteIdforDelete = ref(null);
  
  const addNewNote = (newNoteQuery) => {
    const newNote = {
      id: getNewItemId(notes.value),
      name: newNoteQuery,
      todos: []
    };

    notes.value.push(newNote);
  };

  const setNoteIdforDelete = (id) => {
    noteIdforDelete.value = id;
  };

  const deleteNote = () => {
    notes.value = notes.value
    .filter((note) => note.id !== noteIdforDelete.value);

    noteIdforDelete.value = null;
  };

  const cancelDeleteNote = () => {
    noteIdforDelete.value = null;
  };

  const setCurrentNote = (id) => {
    currentNote.value = notes.value.find((note) => note.id === id);
  }

  const currentNoteName = computed(() => {
    return currentNote.value?.name;
  });

  return {
    notes,
    currentNote,
    noteIdforDelete,
    currentNoteName,

    addNewNote,
    setNoteIdforDelete,
    deleteNote,
    cancelDeleteNote,
    setCurrentNote,
  }
});
