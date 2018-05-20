<template>
  <div>
    <h3>教育经历</h3>
    <el-form>
      <div class="container" v-for="(item, index) in education">
        <el-form-item label="学校">
          <el-input v-model="item.school"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="item.duration"></el-input>
        </el-form-item>
        <el-form-item label="学位">
          <el-input v-model="item.degree"></el-input>
        </el-form-item>
        <i class="el-icon-delete" @click="removeExperience(index)"></i>
      </div>
      <el-button type="danger" @click="addExperience">添加</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    props: ['education'],
    methods: {
      addExperience(){
        this.education.push({
          school:'',
          duration: '',
          degree: ''
        })
      },
      removeExperience(index){
        this.education.splice(index,1)
      }
    }
  }
</script>
