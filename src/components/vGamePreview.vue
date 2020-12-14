<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="card">
    <transition name="fade">
      <div
        class="card-inner w100 h100 flex justify-center align-center"
        v-if="hover"
      >
        <button>
          <a :href="_ref">EXPLORE</a>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["_ref"],
  data() {
    return {
      hover: false,
    };
  },
};
</script>
