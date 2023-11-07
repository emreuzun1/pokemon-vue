<template>
  <div class="w-full">
    <div class="form-control w-full max-w-xs my-4 float-right">
      <label class="label">
        <span class="label-text">Pokemon per Page</span>
      </label>
      <select class="select select-bordered" v-model="limit">
        <option
          v-for="limitValue in [20, 30, 50]"
          :key="limitValue"
          :selected="props.limit === limitValue"
        >
          {{ limitValue }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";

const props = defineProps(["limit", "setLimit"]);
const limit = ref(props.limit);

watch(limit, (newLimit) => {
  props.setLimit(newLimit);
});
</script>

<style></style>
