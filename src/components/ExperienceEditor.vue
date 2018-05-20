<template>
  <div>
    <h3>工作经历</h3>
    <el-form>
      <div class="container" v-for="(item, index) in experience">
        <el-form-item label="公司">
          <el-input v-model="experience.company"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="experience.content"></el-input>
        </el-form-item>
        <i class="el-icon-delete" @click="removeExperience(index)"></i>
      </div>
      <el-button type="danger" @click="addExperience">添加</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    props: ['experience'],
    methods: {
      addExperience(){
        this.experience.push({
          company:'',
          content: ''
        })
      },
      removeExperience(index){
        this.experience.splice(index,1)
      }
    }
  }
</script>
