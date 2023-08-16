<template>
  <v-row width="200px">
    <v-checkbox></v-checkbox>
    <v-card-text>{{item.text}}<span>{{ item.date }}</span>
    </v-card-text>
    <v-btn><v-icon>mdi-cart</v-icon>edit</v-btn>
    <v-btn class="red">x</v-btn>
  </v-row>

</template>

<script setup>
defineProps({
  item: {
    type: Object,
    require: true,
  },
});
const delItem = () => {};
const editItem = () => {};
</script>

<style lang="scss" scoped></style>
