<template>
  <v-row class="ma-5 align-center w-50 mx-auto">
    <v-text-field
      v-model="input"
      label="new todo"
      hide-details="auto"
      :error-messages="showError ? validatorRules(input) : []"
      @focus="showError = true"
      @blur="showError = false"
      @keyup.enter="addTodo"
    ></v-text-field>
    <v-btn @focus="showError = true" @blur="showError = false" class="ml-5" color="green" height="50px" @click="addTodo"
      >Add</v-btn
    >
  </v-row>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';
import { validator, validatorRules } from '@/utils/validator';

const input = ref('');
const showError = ref(false);

const emit = defineEmits(['addTodo']);

const addTodo = () => {
  if (!validator(input.value)) return;

  emit('addTodo', input.value);
  input.value = '';
};
</script>

<style lang="scss" scoped></style>
