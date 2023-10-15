<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button @click="confirmEdit">确认</button>
    </div>
    <div v-else>
      <span >{{ title }}</span>
      <button @click="fn">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    fn() {
      this.isShowEdit = true;
      
      this.$nextTick(()=>{
        console.log(this.$refs.inp.focus());
        this.$ref.inp.focus();
      })
      
    },
    confirmEdit(){
      this.isShowEdit=false;
    }
  },
}
</script>

<style></style>