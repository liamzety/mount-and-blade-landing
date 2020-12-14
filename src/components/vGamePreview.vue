<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="card">
    <transition name="fade">
      <div
        class="card-inner w100 h100 flex justify-center align-center"
        v-if="hover"
      >
        <button>EXPLORE</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>
