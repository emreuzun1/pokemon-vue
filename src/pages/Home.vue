<template>
  <div class="flex flex-col items-center my-12 mx-48">
    <LimitHandler :limit="limit" :setLimit="setLimit" />
    <ul v-if="pokemonList" class="w-full grid grid-cols-5 gap-6">
      <PokemonCard
        v-for="pokemon in pokemonList.results"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </ul>
    <div class="w-1/3 mt-4">
      <Pagination
        v-if="pokemonList"
        :pagination="pagination"
        :isStart="offset === 0"
        :isEnd="offset + 20 > pokemonList.count"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import LimitHandler from "../components/LimitHandler.vue";
import Navbar from "../components/Navbar.vue";
import Pagination from "../components/Pagination.vue";
import PokemonCard from "../components/PokemonCard/PokemonCard.vue";

const pokemonList = ref();
const limit = ref(20);
const offset = ref(0);

const pagination = (next) => {
  if (next) {
    offset.value += limit.value;
    return;
  }
  offset.value -= limit.value;
};

watchEffect(async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=${offset.value}`
  );
  const data = await response.json();
  pokemonList.value = data;
});

const setLimit = (_limit) => {
  limit.value = _limit;
};
</script>

<style></style>
