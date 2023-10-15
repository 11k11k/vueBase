<template>
    <div @click="changeEmit()">
        我是son组件{{ title }}
    </div>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        changeEmit() {
            this.$emit('change', "发送过去的消息")
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