<template>
  <div>
    我是App组件
    <SonDiv :title="myTile" @change="changeTile"></SonDiv>
  </div>
</template>

<script>
import SonDiv from './components/SonDiv';
export default {
  data() {
    return {
      myTile: '+我是传递过去的组件'
    }
  },
  components: {
    SonDiv: SonDiv
  },
  methods:{
    changeTile(newTitle){
      console.log(newTitle);
    }
  }

}
</script>

<style scoped>
div {
  border: 3px solid #000;
  margin: 10px;
}
</style>