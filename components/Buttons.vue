<template>
  <button
    type="button"
    class="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
  >
    <IconsUpload />
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: "Click Me",
    },
  },
  methods: {
    handleButtonClick() {
      console.log("clicked");
    },
  },
};
</script>
