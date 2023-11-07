<template>
  <ul class="flex gap-1">
    <li
      v-for="type in props.types"
      :key="type.name"
      :style="{
        backgroundColor: getBgColor(type.type.name),
        backgroundImage: getBgColor(type.type.name),
      }"
      class="p-1 rounded-lg"
    >
      <p class="text-lg text-slate-100">{{ type.type.name }}</p>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import { Type } from "../utils/getTypeColor";

const props = defineProps(["types"]);
const getBgColor = (type) => {
  return Type[type];
};
</script>

<style></style>
