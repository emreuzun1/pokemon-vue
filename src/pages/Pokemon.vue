<template>
  <Navbar />
  <div v-if="pokemon" class="my-12 mx-96">
    <p class="text-5xl uppercase">
      {{ pokemon.name
      }}<span class="text-3xl text-gray-300 ml-4">#{{ pokemon.id }}</span>
    </p>
    <PokemonTypes :types="pokemon.types" class="mt-4" />
    <PokemonStats :stats="pokemon.stats" class="mt-4" />
    <div class="w-full flex justify-center">
      <img
        :src="pokemon.sprites.front_default"
        alt="pokemon"
        class="mt-4 w-96"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../components/Navbar.vue";
import PokemonTypes from "../components/PokemonTypes.vue";
import PokemonStats from "../components/PokemonStats.vue";
const route = useRoute();
const pokemon = ref();
watchEffect(async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${route.params.id}`
  );
  const data = await response.json();
  pokemon.value = data;
  console.log(data);
});
</script>

<style></style>
