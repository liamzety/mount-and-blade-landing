<template>
  <footer>
    <div
      class="footer-container container h100 flex justify-center align-center col"
    >
      <p>All rights reserved for © TaleWorlds Entertainment.</p>
      <p>This is a fan/demo site made to hone and show my skills.</p>
      <p>
        I am in no way affiliated to the developers or publishers of the
        mentioned games.
      </p>
      <p class="flex align-center">
        Site Developed By
        <a href="http://liamzety.herokuapp.com/#/"
          ><img class="liam-logo" :src="liam_logo" alt="logo"
        /></a>
      </p>
    </div>
  </footer>
</template>

<script>
import liam_logo from "@/assets/img/liam-logo.png";
export default {
  computed: {
    liam_logo() {
      return liam_logo;
    },
  },
};
</script>
