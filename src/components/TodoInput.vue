<template>
  <v-container class="d-flex align-center" :class="width <= 500 ? '' : 'mb-8'">
    <v-text-field
      class="input mt-4"
      v-model="input"
      ref="inputRef"
      :label="item ? 'EDIT TASK' : 'NEW TASK'"
      :error-messages="showError ? validatorRules(input) : []"
      @focus="showError = true"
      @keydown.enter="showError = true"
      @blur="showError = false"
      @keyup.enter="onBtn"
    ></v-text-field>

    <v-btn
      class="mb-2"
      :color="item ? 'yellow' : 'green'"
      height="55px"
      :width="width > 768 ? '40%' : '60px'"
      @focus="showError = true"
      @blur="showError = false"
      @click="onBtn"
      >{{ item ? 'Edit' : 'Add' }}</v-btn
    >
  </v-container>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { validator, validatorRules } from '@/utils/validator';
import { useDisplay } from 'vuetify';

const input = ref(props.item?.value.text || '');
const inputRef = ref(null);
const showError = ref(false);
const { width } = useDisplay();

const props = defineProps({
  item: {
    type: Object, // {id,text}
    require: false,
  },
});

const emit = defineEmits(['addTodo', 'editTodo']);

const onBtn = () => {
  if (!validator(input.value)) {
    return inputRef.value.click();
  }

  emit((props.item ? 'editTodo' : 'addTodo'), input.value);

  input.value = '';
  showError.value = false;
};
// const addTodo = () => {
//   if (!validator(input.value)) {
//     return inputRef.value.click();
//   }
//   emit('addTodo', input.value);
//   input.value = '';
//   showError.value = false;
// };

onMounted(() => {
  if (props.item) inputRef.value.click();
});
</script>

<style lang="scss" scoped>
.v-container {
  min-width: 200px;
  width: 400px;
  @media screen and (max-width: 500px) {
    width: 80%;
  }
}
.v-btn {
  margin-top: 2px;
  box-sizing: content-box;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-bottom: rgba(163, 163, 163, 0.805) 1px solid;
}
</style>
