<template>
  <div>
    <h1>{{ title }}</h1>
    <el-form>
      <div class="container" v-for="(item, index) in items">
        <el-form-item v-for="key in keys" :label="labels[key] || key" :key="key">
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
        <i class="el-icon-delete" @click="removeItems(index)"></i>
      </div>
      <el-button type="danger" @click="addItems" size="small" autofocus="false">添加</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    props: ['items', 'labels', 'title'],
    computed: {
      keys(){
        return Object.keys(this.items[0])
      }
    },
    methods: {
      addItems(){
        const empty = {}
        this.keys.map((key)=>{
          empty[key] = ''
        })
        this.items.push(empty)
      },
      removeItems(index){
        this.items.splice(index,1)
      }
    }
  }
</script>
