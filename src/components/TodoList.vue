<template>
  <!-- FORM -->
  <v-list height="auto" class="rounded-lg" :class="`bg-${title.includes('Done') ? 'green' : 'amber'}`">
    <h2 class="text-left pl-10">{{ title.toUpperCase() }}</h2>
    <v-list-item
      class="border ma-2"
      :class="item.done ? 'done' : ''"
      v-for="(item, ind) in items"
      :key="item.id"
      @click="$emit('doneItem', item.id)"
    >
      <v-list-item-content class="d-flex align-center justify-space-between py-2">
        <!-- NUMBER -->
        <v-chip>{{ ind + 1 }}</v-chip>
        <!-- BLOCK -->
        <div
          class="d-flex flex-1-1 w-80 align-start justify-space-between"
          :class="width < smallWidth ? 'justify-space-between flex-column ' : ' align-center  justify-space-between'"
        >
          <!-- TEXT -->
          <h3 class="ml-4 text-left" :class="width <= smallWidth && 'text'">
            {{ item.text }}
          </h3>
          <!-- DATE -->
          <h4 v-if="width < smallWidth" class="mx-2 ml-auto">
            <div>{{ createdDate[ind].date }}</div>
            <div>{{ createdDate[ind].time }}</div>
          </h4>
          <h4 v-else class="mx-2">{{ createdDate[ind].fullDate }}</h4>
        </div>
        <!-- BUTTONS -->
        <v-list-item-action :class="width <= smallWidth && 'd-flex flex-column'">
          <v-btn
            color="yellow"
            class="ma-1"
            min-width="auto"
            :class="width <= smallWidth && 'h-auto px-1'"
            :width="width <= smallWidth ? '30px' : ''"
            v-if="!item.done"
            @click.stop.prevent="$emit('onEdit', item.id)"
          >
            <SvgIcon type="mdi" :path="mdiPen"></SvgIcon
          ></v-btn>
          <v-btn
            min-width="auto"
            color="red"
            class="ma-1"
            :class="width <= smallWidth && 'h-auto px-1'"
            :width="width <= smallWidth ? '30px' : ''"
            @click.stop.prevent="$emit('onDelete', item.id)"
          >
            <SvgIcon type="mdi" :path="mdiDelete"></SvgIcon
          ></v-btn>
        </v-list-item-action>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref, computed } from 'vue';
// import TodoItem from '@/components/TodoItem.vue';
import { mdiPen, mdiDelete } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';
import { useDisplay } from 'vuetify';
import moment from 'moment';

const createdDate = computed(() => {
  return props.items?.map((item) => ({
    fullDate: moment(item.date).format('lll'),
    date: moment(item.date).format('l'),
    time: moment(item.date).format('LT'),
  }));
});

const smallWidth = 600;

const { width } = useDisplay();
const props = defineProps({
  title: String,
  items: {
    type: Array,
    require: true,
  },
});

const count = ref(0);
</script>

<style type="scss" scoped>
.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.341);
}

.text {
  white-space: normal;
  /* max-width: 200px; */
  max-width: 100vw;
  width: 90%;
  overflow-wrap: break-word;
}
.done {
  background-color: rgba(0, 128, 0, 0.489);
  font-weight: 900;
}
.v-list-item-content {
  background: red !important;
}
</style>
