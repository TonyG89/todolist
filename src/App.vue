<template>
  <h1>My To Do List</h1>

  <!-- FORM -->
  <TodoInput @addTodo="addTodoList" />
  <TodoList
    v-if="!!dataState.todo.length"
    :title="`task list (${dataState.todo.length})`"
    :items="dataState.todo"
    @doneItem="checkDone"
    @onDelete="deleteItem"
    @onEdit="openDialog"
  />
  <h1 class="mb-10" v-else-if="!!dataState.done.length">
    Congratulations! <br />You done all tasks ({{ dataState.done.length }})
  </h1>
  <v-divider class="my-10" />
  <TodoList
    v-if="!!dataState.done.length"
    :title="`Done (${dataState.done.length})`"
    :items="dataState.done"
    @doneItem="checkDone"
    @onDelete="deleteItem"
  />

  <DialogForm
    :flag="flagEditDialog"
    :entity="editEntity"
    @exitDialog="flagEditDialog = false"
    @editedTask="patchData"
  />
</template>

<script setup>
import { computed, ref, reactive, watch } from 'vue';
import TodoList from '@/components/TodoList.vue';
import TodoInput from '@/components/TodoInput.vue';

import localStorage from '@/utils/localStorage';
import { useDisplay } from 'vuetify';
import DialogForm from './components/DialogForm.vue';

const flagEditDialog = ref(false);
const editEntity = reactive({});

const { mobile } = useDisplay();

const { setLocalData, getLocalData } = localStorage('todoList');

const data = ref(typeof localStorage !== 'undefined' ? [...getLocalData()] : data);

const dataState = computed(() => ({
  todo: data.value?.filter(({ done }) => !done),
  done: data.value?.filter(({ done }) => done),
}));

const addTodoList = (text) => {
  let maxId = data.value.reduce((max, obj) => (obj.id > max ? obj.id : max), -Infinity);
  const obj = {
    text: text,
    date: new Date(),
    done: false,
    id: ++maxId,
  };

  data.value.unshift(obj);
  setLocalData(data.value);
};

const checkDone = (id) => {
  const currentItem = data.value.find((item) => item.id === id);
  currentItem.done = !currentItem.done;
  setLocalData(data.value);
};

const deleteItem = (id) => {
  const delItem = data.value.find((item) => item.id === id);
  data.value.splice(data.value.indexOf(delItem), 1);
  setLocalData(data.value);
};

const openDialog = (id) => {
  editEntity.value = data.value?.find((item) => item.id === id);
  flagEditDialog.value = true;
};
const patchData = (newEntity) => {
  const updateData = data.value.map((item) => (item.id === newEntity.id ? { ...item, ...newEntity } : item));
  data.value = [...updateData];
  setLocalData(updateData);
};
</script>

<style>
h1 {
  font-size: 3rem;

  @media screen and (max-width: 400px) {
    font-size: 2.6rem;
  }
}
h2 {
  font-size: 2.6rem;

  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
}
h3 {
  font-size: 1.4rem;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
    line-height: 1.1;
    margin-bottom: 10px;
  }
}
h4 {
  font-size: 1rem;

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    line-height: 1;
  }
}
h5 {
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
}
</style>
