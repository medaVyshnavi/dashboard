<template>
  <div class="p-4 sm:ml-24">
    <h1 class="text-4xl font-bold">データセット</h1>
    <h4 class="text-xl font-normal opacity-40 py-2">データセットを管理する</h4>
    <Tab />
    <div class="mt-6 flex justify-between">
      <div>
        <Button />
        <Button />
      </div>
      <Search />
    </div>
    <Table />
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import Tab from "./Tab.vue";
import Table from "./Table.vue";
import Button from "./Buttons.vue";
import Search from "./Search.vue";
import Pagination from "./Pagination.vue";
</script>
