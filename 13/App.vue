<template>
  <div>

    <MyDialog>
      <template v-slot:title>
        开头
      </template>
    </MyDialog>


    <MyDialog>
      
      <template #button>
        按钮一
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>