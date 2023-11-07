<template>
  <figure>
    <img :src="props.image" :alt="props.name" class="w-full" />
  </figure>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["image", "name"]);
</script>
