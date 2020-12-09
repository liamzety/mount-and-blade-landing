<template>
  <div class="game-list relative">
    <div class="top-shadow"></div>
    <div class="game-list-bg absolute"></div>
    <div class="game-list-container container">
      <div v-for="(patch,idx) in patchArray" 
      :key=idx 
      class="card">
      <img class="w100" :src="patch.src" alt="">
      <div class="txt-container flex space-between  col">
         <div  v-html="patch.title"></div>
         <div class="patch-body-preview" >
           <long-txt :txt="patch.body" />
         </div>
      <button>read more</button>
      </div>
      </div>
 
    </div>
  </div>
</template>

<script>
import {bannerLordService} from '@/services/bannerlord.js'
import LongTxt from '@/components/LongTxt.vue'
export default {
    components: {
    LongTxt,
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      bannerLordService.query()
    }
  },
  computed: {
    patchArray() {
      return bannerLordService.getPatchNotes()
    }
  }
};
</script>

<style>
</style>