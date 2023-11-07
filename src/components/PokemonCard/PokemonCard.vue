<template>
  <div
    class="card w-full bg-base-200 shadow-xl cursor-pointer transition-all hover:scale-105"
    v-if="pokemonData.name"
    @click="router.push(`/pokemon/${pokemonData.id}`)"
  >
    <PokemonCardBody
      :name="pokemonData.name"
      :id="pokemonData.id"
      :types="pokemonData.types"
    />
    <PokemonCardImage
      :image="pokemonData.sprites.front_shiny"
      :name="pokemonData.name"
    />
  </div>
</template>
<script setup>
import { defineProps, ref, watchEffect } from "vue";
import PokemonCardBody from "./PokemonCardBody.vue";
import PokemonCardImage from "./PokemonCardImage.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps(["pokemon"]);
const pokemonData = ref({});

watchEffect(async () => {
  const response = await fetch(props.pokemon.url);
  const data = await response.json();
  pokemonData.value = data;
});
</script>
