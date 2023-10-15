<template>
  <div class="app">
    <BaseCount :count="count" 
    @add="FaDd" 
    @sub="FsUd"></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  components: {
    BaseCount
  },
  data() {
    return {
      count: 405
    }
  },
  methods: {
    FaDd(v) {
      this.count = v
    },
    FsUd(c) {
      this.count = c
    }
  }
}
</script>

<style></style>