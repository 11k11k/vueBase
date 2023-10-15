<template>
    <section class="main">
        <ul class="todo-list">
            <li class="todo" v-for="(item, index) in list" :key="item.id">
                <div class="view">
                    <span class="index">{{ index + 1 }}.</span> <label>{{ item.name }}</label>
                    <button class="destroy" @click="dec(item.id)"></button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        list: Array
    },
    methods: {
        dec(id) {
            // console.log(id);
            // const decList = this.list.filter((item) => item.id === id);

            this.$emit("ListDec", id)
        }
    }
}
</script>

<style scoped></style>