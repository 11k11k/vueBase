<template>
  <div>
    <h1 v-color="color1">自定义指令</h1>
    <input type="text" v-focus v-color="color2">
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: 'blue'
    }
  },
  mounted() {
    // this.$refs.np.focus();
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    },
    red: {
      inserted(el) { el.style.color = "red"; }
    },
    color: {
      inserted(el,binding) {
        console.log(el);
        // console.log(binding);
        el.style.color=binding.value;
      },
      update(el,binding) {
        console.log("指令修改了")
        el.style.color=binding.value;

      }
    }

  }

}

</script>

<style></style>