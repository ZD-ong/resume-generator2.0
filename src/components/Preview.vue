<template>
  <div id="preview"  :class="{fullScreen: view}">
    <el-button type="danger" icon="el-icon-view" size="mini" class="view" @click="preview"></el-button>
    <el-button type="danger" icon="el-icon-edit" size="mini" class="view" v-show="view" @click="exitPreview"></el-button>
    <el-button type="danger" icon="el-icon-check" circle class="save"></el-button>
    <div class="wrap">
      <h1>{{resume.profile.name || '姓名'}}</h1>
      <p>城市：{{resume.profile.city}} | 年龄：{{resume.profile.age}} | 电话：{{resume.profile.phone}} | 邮箱：{{resume.profile.email}}</p>
      <div class="content">
        <section v-if="filter(resume.education).length > 0">
        <h2>教育经历</h2>
        <ul>
          <li v-for="project in filter(resume.education)">
            <span>{{project.school}}</span>
            <span>{{project.duration}}</span>
            <span>{{project.degree}}</span>
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.experience).length > 0">
        <h2>工作经历</h2>
        <ul>
          <li v-for="project in filter(resume.experience)">
            <h3>{{project.company}}</h3>
            <span>{{project.position}}</span>
            <article>{{project.content}}</article>
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.skills).length > 0">
        <h2>技能</h2>
        <ul>
          <li v-for="project in filter(resume.skills)">
            <span>{{project.name}}</span>
            <span>{{project.description}}</span>
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.projects).length > 0">
        <h2>项目经验</h2>
        <ul>
          <li v-for="project in filter(resume.projects)">
            <h3>{{project.name}}</h3>
            <a :href="project.link">{{project.link}}</a>
            <article>{{project.description}}</article>
            <article>{{project.keywords}}</article>
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.awards).length > 0">
        <h2>获奖情况</h2>
        <ul>
          <li v-for="project in filter(resume.awards)">
            <span>{{project.name}}</span>
            <span>{{project.time}}</span>
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.social).length > 0">
        <h2>社交</h2>
        <ul>
          <li v-for="project in filter(resume.social)">
            <span>{{project.name}}</span>
            <a :href="project.link">{{project.link}}</a>
          </li>
        </ul>
      </section>
      </div>
      
    </div>
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
    > .save {
      position: fixed;
      right: 40px;
      bottom: 40px;
      box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2), 0 5px 15px 0 rgba(0,0,0,0.1);
    }
    .wrap {
      .content {
        margin-top:64px;
        section {
          border: 1px solid #fef0f0;
          border-radius: 4px;
          margin-top: 24px;
          padding: 24px;
          li {
            margin-top: 16px;
          }
          span {
            margin-right: 16px;
          }
          article {
            margin-top: 16px;
          }
          h3 {
            margin-bottom: 8px;
            padding-left: 8px;
            position: relative;
          }
          h3::after {
            content: '◦';
            position: absolute;
            top: 0;
            left: 0;
          }
          a {
            color: #f56c6c;
          }
        }
      }
      padding: 16px 40px;
      h1 {
      text-align: center;
      }
      h2 {
        color: #f56c6c;
      }
      p {
        text-align: center;
      }
    }
  }
  
</style>
