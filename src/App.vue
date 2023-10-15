<template>
  <div>
    <MyTable :list="list">
      <template #default="obj">

        <button @click="remote(obj.row.id)">删除</button>
      </template>

    </MyTable>
    <MyTable :list="list2">
      <template v-slot:default="obj">
        <button @click="show(obj.row.name)">开除</button>
      </template>

    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  components: {
    MyTable
  }, methods: {
    remote(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    show(name) {
      alert(`${name}不能开除`);
    }
  }
}
</script>
