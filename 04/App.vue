<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <!-- <header class="header">
      <h1>小黑记事本</h1>
      <input placeholder="请输入任务" class="new-todo" />
      <button class="add">添加任务</button>
    </header> -->
    <TodoHeader @add="ListAdd"></TodoHeader>
    <!-- 列表区域 -->
    <!-- <section class="main">
      <ul class="todo-list">
        <li class="todo">
          <div class="view">
            <span class="index">1.</span> <label>吃饭饭</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section> -->
    <TodoMain :list="listTable" @ListDec="dec"></TodoMain>
    <!-- 统计和清空 -->
    <TodoFooter :list="listTable" @clearList="clear"></TodoFooter>

  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {

  data() {

    return {
      listTable:
        JSON.parse(localStorage.getItem('listKey'))
        ||
        [
          { id: 1, name: "打篮球" },
          { id: 2, name: '羽毛球' },
          { id: 3, name: '排球' }
        ]
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoMain: TodoMain,
    TodoFooter: TodoFooter
  },
  methods: {
    ListAdd(value) {

      this.listTable.unshift({
        id: +new Date(),
        name: value
      });


    },
    dec(value) {
      // console.log(value);
      this.listTable = this.listTable.filter((item) => item.id !== value);
    },
    clear() {
      this.listTable = []
    }
  },
  watch: {
    listTable: {
      deep: true,

      handler(newValue) {

        localStorage.setItem("listKey", JSON.stringify(newValue))
      }
    }

  }
}
</script>

<style></style>
