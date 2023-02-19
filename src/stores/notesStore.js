import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { notesData } from '@/data/notesData';

// Custom function helpers ---
import {
  deleteItemFromData, // deleteItemFromData(data, itemId) => a new data object without a deleted element;
  findItemInData, // findItemInData(data, itemId) => an item object that is part of the current data;
  getDeeplyDataCopy, // getDiplyDataCopy(data) => deep copy of the current object
  getNewItemId // getNewItemId(data) => id of the new element created for the current data;
} from './utils';
// ---------------------------

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
    notes.value = deleteItemFromData(noteIdforDelete.value, notes.value);
    noteIdforDelete.value = null;
  };

  const cancelDeleteNote = () => {
    noteIdforDelete.value = null;
  };

  const setCurrentNote = (id) => {
    currentNote.value = findItemInData(id, notes.value);
    getCurrentNoteTodosCopy();
  };

  const getCurrentNoteTodosCopy = () => {
    currentNoteTodosCopy.value = getDeeplyDataCopy(currentNote.value.todos);
  };

  const addNewTodo = (newTodoQuery) => {
    const newTodo = {
      id: getNewItemId(currentNoteTodosCopy.value),
      name: newTodoQuery,
      todos: []
    };

    currentNoteTodosCopy.value.push(newTodo);
    isCurrentNoteChanged.value = true;
  };

  const resetNoteChanges = () => {
    if (isCurrentNoteChanged.value) {
      getCurrentNoteTodosCopy();
      isCurrentNoteChanged.value = false;
    }
  };

  const saveNoteChanges = () => {
    if (isCurrentNoteChanged.value) {
      currentNote.value.todos = currentNoteTodosCopy.value;
      isCurrentNoteChanged.value = false;
      getCurrentNoteTodosCopy();
    }
  };

  const saveTodoQueryChanges = (id, todoQuery) => {
    const currentTodo = findItemInData(id, currentNoteTodosCopy.value);

    if (todoQuery) {
      currentTodo.name = todoQuery;
    } else {
      deleteTodoItem(id);
    }
    
    isCurrentNoteChanged.value = true;
  };

  const deleteTodoItem = (id) => {
    currentNoteTodosCopy.value = deleteItemFromData(id, currentNoteTodosCopy.value);
    isCurrentNoteChanged.value = true;
  };

  const changeTodoProgress = (id) => {
    const currentTodo = findItemInData(id, currentNoteTodosCopy.value);

    currentTodo.completed = !currentTodo.completed;
    isCurrentNoteChanged.value = true;
  };

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
    saveNoteChanges,
    deleteTodoItem,
    saveTodoQueryChanges,
    changeTodoProgress
  };
});
