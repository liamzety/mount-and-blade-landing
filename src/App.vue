<template>
  <div id="app">
    <scroll-up-btn />
    <router-view />
  </div>
</template>
<script>
import ScrollUpBtn from "@/components/ScrollUpBtn.vue";
export default {
  components: { ScrollUpBtn },
};
</script>