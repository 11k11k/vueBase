<template>
  <div class="app">
    <BaseSelect
    :cityId="selectId"
    @iDChange="selectId=$event"
    ></BaseSelect>
  </div>
</template>

<script>
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