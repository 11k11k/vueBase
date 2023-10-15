<template>
  <div class="app">
    <button>退出按钮</button>
    <BaseDialog :visible.sync="toShow">
    </BaseDialog>
    <!-- :visible.sync="toShow" -->
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      toShow: true
    }
  },
  methods: {

  },
  components: {
    BaseDialog,
  },
}
</script>

<style></style>