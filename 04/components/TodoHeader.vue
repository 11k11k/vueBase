<template>
    <div>
        <header class="header">
            <h1>小黑记事本</h1>
            <input @keyup.enter="add(newTodo)" v-model="newTodo" placeholder="请输入任务" class="new-todo" />
            <button class="add" @click="add(newTodo)">添加任务</button>
        </header>
    </div>
</template>

<script>


export default {
    data() {
        return {
            newTodo: '',
        }

    },
    methods: {
        add() {
            // console.log(newTodo);
            if(this.newTodo.trim()===''){
                alert('不能为空');
                return
            }
            this.$emit("add", this.newTodo)
            this.newTodo='' 
        }
    }

}
</script>

<style scoped></style>