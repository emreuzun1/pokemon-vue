<template>
  <div class="card-body">
    <h2 class="card-title">
      {{ props.name.toUpperCase() }}
    </h2>
    <p class="font-bold">#{{ props.id }}</p>
    <PokemonTypes :types="props.types" />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import PokemonTypes from "../PokemonTypes.vue";
const props = defineProps(["name", "id", "types"]);
</script>
