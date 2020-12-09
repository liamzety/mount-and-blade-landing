<template>
  <section class="readmore-container flex column">
    <div v-html="txtToShow"></div>
    <div
     class="readmore" 
    v-if="txt.length > 100"
     >
    </div>
  </section>
</template>

<script>
export default {
  props: ["txt"],
  computed: {
    txtToShow() {
      let textToShow = this.txt;
      if ( this.txt.length > 100)
        textToShow = textToShow.slice(0, 99) + "...";
        console.log('txt:', textToShow)
      return textToShow;
    },
  },
};
</script>

<style lang="scss">
.readmore-container {
  max-width:98vw;
  overflow: hidden;

  .readmore {
  align-self: flex-end;
  cursor: pointer;
  transition: .3s;

  &:hover {
      color: darken(#333, .9);
      text-decoration: underline;
  }
  }
}
</style>
