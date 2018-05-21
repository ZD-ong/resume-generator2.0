<template>
  <div id="preview">
    <el-button type="danger" icon="el-icon-view" size="mini" class="view" @click="preview"></el-button>
    <el-button type="danger" icon="el-icon-back" size="mini" class="view" v-show="view" @click="exitPreview"></el-button>
    <h1>{{resume.profile.name || '姓名'}}</h1>
    <p>城市：{{resume.profile.city}} | 年龄：{{resume.profile.age}} | 电话：{{resume.profile.phone}} | 邮箱：{{resume.profile.email}}</p>
    <section v-if="filter(resume.projects).length > 0">
      <h3>项目经验</h3>
      <ul>
        <li v-for="project in filter(resume.projects)">
          {{project.name}}
          {{project.link}}
          {{project.description}}
          {{project.keywords}}
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  export default {
    props:['resume'],
    data(){
      return{
        view: false
      }
    },
    methods: {
      filter(arr){ //找出非空对象
        return arr.filter(item=> !this.isEmpty(item))
      },
      isEmpty(obj){
        let empty = true
        for(let key in obj){
          if(obj[key]){
            empty = false
            break
          }
        }
        return empty
      },
      preview(){
        this.$emit('preview')
        this.view = true
      },
      exitPreview(){
        this.$emit('exitPreview')
        this.view = false
      }
    }
  }
</script>
<style lang="scss">
  #preview {
    position: relative;
    > .view {
      position: absolute;
      top: 16px;
      right: 16px;
    }
    h1 {
      text-align: center;
      padding: 16px 0;
    }
    p {
      text-align: center;
    }
  }

</style>
