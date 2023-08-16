<template>
  <v-row class="ma-5 align-center">
    <v-text-field @keyup.enter="addTodo" v-model="input" label="new todo" hide-details="auto"></v-text-field>
    <v-btn class="ml-5" color="green" height="50px" @click="addTodo" >Add</v-btn>
  </v-row>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';
const input = ref('');

const emit = defineEmits(['addTodo']);

const addTodo = () => {
  emit('addTodo', input.value)
  input.value = ''};
</script>

<style lang="scss" scoped></style>
