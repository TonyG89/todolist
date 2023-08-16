<template>
  <h1>My TodoList</h1>

  <!-- FORM -->
  <v-card width="1200px">
    <TodoInput @addTodo="addTodoList" />
    <TodoList
      v-if="!!dataState.todo.length"
      title="TO DO"
      :items="data.filter(({ done }) => !done)"
      @doneItem="checkDone"
      @delItem="deleteItem"
      @editItem="editItem"
    />
    <h1 v-else-if="!!dataState.done.length">Congratilations! You done all todo</h1>
    <TodoList
      v-if="!!dataState.done.length"
      title="Done"
      :items="data.filter(({ done }) => done)"
      @doneItem="checkDone"
      @delItem="deleteItem"
      @editItem="editItem"
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
  const obj = {
    text: text,
    date: new Date().toString().slice(4, 24),
    done: false,
    id: data.value.length + 1,
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
};

const editItem = (id) => {
  console.log(id, 'edit');
};

console.log(data.value);
</script>

<style scoped></style>
