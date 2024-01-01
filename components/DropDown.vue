<template>
  <fwb-dropdown text="Menu">
    <list-group>
      <list-group-item> Profile </list-group-item>
      <list-group-item> Settings </list-group-item>
      <list-group-item> Messages </list-group-item>
      <list-group-item> Download </list-group-item>
    </list-group>
  </fwb-dropdown>
</template>

<script setup>
import { FwbDropdown, ListGroup, ListGroupItem } from "flowbite-vue";
</script>
