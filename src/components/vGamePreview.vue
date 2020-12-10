<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="card">
    <h1 v-if="hover">HOVER</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  created() {
    console.log("hover:", this.hover);
  },
};
</script>

<style>
</style>