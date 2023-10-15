<template>
  <div class="app">
    <BaseSelect
    v-model="selectId"
    ></BaseSelect>
  </div>
</template>

<script>
// :value  @input
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  }
}
</script>

<style>
</style>