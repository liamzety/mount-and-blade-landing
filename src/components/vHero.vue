<template>
  <div class="hero relative">
    <div class="hero-container h100">
      <div class="cta flex col align-center">
        <h1>UNLEASH YOUR FURY!</h1>
        <h2>- Join The Battlefield -</h2>
        <div>
          <button>
            <a href="https://www.taleworlds.com/en/Games/Bannerlord">JOIN</a>
          </button>
          <button>
            <a href="https://www.taleworlds.com/en/Games/Bannerlord/Features">
              LEARN MORE</a
            >
          </button>
        </div>
      </div>
      <div class="rider absolute w100 h100"></div>
    </div>
    <div class="bg absolute w100 h100">
      <div class="bg-inner absolute w100 h100"></div>
    </div>
  </div>
</template>

<script>
import smug from "@/assets/img/black_smug.png";

export default {
  computed: {
    smug() {
      return smug;
    },
  },
};
</script>