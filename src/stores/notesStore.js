import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { notesData } from '@/data/notesData';
import { getNewItemId } from './utils';

const initialNotes = notesData;

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref(initialNotes);
  const currentNote = ref(null);
  const currentNoteTodosCopy = ref([]);
  const noteIdforDelete = ref(null);
  const isCurrentNoteChanged = ref(false);
  
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

    getCurrentNoteTodosCopy();
  };

  const getCurrentNoteTodosCopy = () => {
    currentNoteTodosCopy.value = [...currentNote.value.todos];
  };

  const addNewTodo = (newTodoQuery) => {
    const newTodo = {
      id: getNewItemId(notes.value),
      name: newTodoQuery,
      todos: []
    };

    currentNoteTodosCopy.value.push(newTodo);
    isCurrentNoteChanged.value = true;
  }

  const resetNoteChanges = () => {
    if (isCurrentNoteChanged.value) {
      getCurrentNoteTodosCopy();
      isCurrentNoteChanged.value = false;
    }
  }

  const saveNoteChanges = () => {
    if (isCurrentNoteChanged.value) {
      currentNote.value.todos = currentNoteTodosCopy.value;
      isCurrentNoteChanged.value = false;
    }
  }

  const currentNoteName = computed(() => {
    return currentNote.value?.name;
  });

  return {
    notes,
    currentNote,
    noteIdforDelete,
    currentNoteName,
    currentNoteTodosCopy,
    isCurrentNoteChanged,

    addNewNote,
    setNoteIdforDelete,
    deleteNote,
    cancelDeleteNote,
    setCurrentNote,
    addNewTodo,
    resetNoteChanges,
    saveNoteChanges
  }
});
