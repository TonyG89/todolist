<template>
  <h2 class="text-left pl-10" >{{ title.toUpperCase() }}</h2>

  <!-- FORM -->
  <!-- <TodoItem v-for="obj in items" :key="obj.date" item="obj" /> -->
  <v-list width="100%" height="auto" :class="`bg-${title === 'Done' ? 'green' : 'amber'}`">
    <v-list-item
      class="border ma-2"
      :class="item.done ? 'done' : ''"
      v-for="item in items"
      :key="item.id"
      @click="$emit('doneItem', item.id)"
    >
      <v-list-item-content class="d-flex align-center justify-space-between py-2">
        <v-list-item-subtitle>{{ item.id }}</v-list-item-subtitle>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
        <v-list-item-subtitle class="mr-10">{{ item.date }}</v-list-item-subtitle>
        <v-list-item-action class="d-flex flex-wrap">
          <v-btn v-if="!item.done" color-yellow><v-icon>mdi-cart</v-icon>edit</v-btn>
          <v-btn color="red">x</v-btn>
        </v-list-item-action>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref } from 'vue';
// import TodoItem from '@/components/TodoItem.vue';

defineProps({
  title: String,
  items: {
    type: Array,
    require: true,
    // validator: (arr) => {
    //   if (!Array.isArray(arr)) {
    //     return false;
    //   }
    //   arr.forEach((obj) => {
    //     // TODO: SWITCH
    //     if (
    //       typeof obj !== 'object' ||
    //       !obj.hasOwnProperty('text') ||
    //       !obj.hasOwnProperty('date') ||
    //       !obj.hasOwnProperty('done')
    //     )
    //       false;
    //   });
    //   return true;
    // },
  },
});

const count = ref(0);
</script>

<style type="scss" scoped>
.v-list-item {
  &:hover {
    background-color: rgba(255, 255, 255, 0.341);
  }
}

.done {
  background-color: rgba(0, 128, 0, 0.489);
  font-weight: 900;
}
</style>
