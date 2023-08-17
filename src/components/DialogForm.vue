<template>
  <v-dialog max-width="500px" v-model="dialog" @click:outside="closeDialog" @keydown.esc="closeDialog">
    <v-sheet class="bg-third pa-4 d-flex align-center">
      <TodoInput :item="entity" @editTodo="onEdit" class="mt-10" />
      <v-btn color="red close" icon @click="closeDialog"> x </v-btn>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import TodoInput from './TodoInput.vue';

const dialog = computed(() => props.flag);

const props = defineProps({
  flag: {
    type: Boolean,
    default: false,
  },
  entity: {
    type: Object, // {id,text}
    require: true,
  },
});

const emit = defineEmits(['editedTask', 'exitDialog']);

const closeDialog = () => emit('exitDialog');
const onEdit = (payload) => {
  emit('editedTask', { id: props.entity.value.id, text: payload });
  closeDialog();
};
</script>

<style lang="scss" scoped>
.v-btn {
  margin-top: 2px;
  box-sizing: content-box;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-bottom: rgba(163, 163, 163, 0.805) 1px solid;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  border-radius: 50%;
}
</style>
