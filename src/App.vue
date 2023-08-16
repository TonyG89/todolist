<template>
  <h1>My TodoList</h1>

  <!-- FORM -->
  <v-card width="900px">
    <TodoInput @addTodo="addTodoList" />
    <TodoList
      v-if="!!dataState.todo.length"
      :title="`task list (${dataState.todo.length})`"
      :items="dataState.todo"
      @doneItem="checkDone"
      @onDelete="deleteItem"
      @onEdit="editItem"
    />
    <h1 v-else-if="!!dataState.done.length">Congratulations! You done all todo ({{ dataState.done.length }})</h1>
    <TodoList
      v-if="!!dataState.done.length"
      :title="`Done (${dataState.done.length})`"
      :items="dataState.done"
      @doneItem="checkDone"
      @onDelete="deleteItem"
    />
  </v-card>
</template>

<script setup>
import { computed, ref, reactive, watch } from 'vue';
import TodoList from '@/components/TodoList.vue';
import TodoInput from '@/components/TodoInput.vue';
import localStorage from '@/utils/localStorage';

const { setLocalData, getLocalData, patchLocalData } = localStorage('todoList');

const data = ref(typeof localStorage !== 'undefined' ? [...getLocalData()] : data);

const dataState = computed(() => ({
  todo: data.value?.filter(({ done }) => !done),
  done: data.value?.filter(({ done }) => done),
}));

const addTodoList = (text) => {
  let maxId = data.value.reduce((max, obj) => (obj.id > max ? obj.id : max), -Infinity);
  const obj = {
    text: text,
    date: new Date().toString().slice(4, 24),
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
  console.log(delItem);
  data.value.splice(data.value.indexOf(delItem), 1);
  setLocalData(data.value);
};

const editItem = (id) => {
  console.log(id, 'edit');
};

console.log(data.value);
</script>

<style scoped>
.v-card {
}
</style>
