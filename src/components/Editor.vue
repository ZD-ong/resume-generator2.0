<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5,6]"
            :class="{active: currentTab === i}"
            @click="currentTab=i">
          <svg class="icon">
            <use :xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="content">
      <li v-bind:class="{active: currentTab === 0}">
        <ProfileEditor :profile="profile"></ProfileEditor>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <ItemsEditor :items="experience" :labels="{company:'公司', content:'工作内容'}" :title="'工作经历'"></ItemsEditor>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <ItemsEditor :items="education" :labels="{school:'学校', duration:'时间', degree:'学位'}" :title="'教育经历'"></ItemsEditor>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ItemsEditor :items="skills" :labels="{name:'技能名称', description:'技能简述'}" :title="'技能'"></ItemsEditor>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ItemsEditor :items="projects" :labels="{name:'项目名称', link:'项目链接', description:'项目描述', keywords:'技术栈'}" :title="'项目经历'"></ItemsEditor>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <ItemsEditor :items="awards" :labels="{name:'奖项名称', time:'获奖时间'}" :title="'获奖情况'"></ItemsEditor>
      </li>
      <li v-bind:class="{active: currentTab === 6}">
        <ItemsEditor :items="social" :labels="{name:'社交平台', link:'链接'}" :title="'社交'"></ItemsEditor>
      </li>
      <!--<li v-for="i in [0,1,2,3,4,5]"-->
          <!--:class="{active:currentTab === i}">{{i}}</li>-->
    </ol>
  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor'
  import ItemsEditor from './ItemsEditor'

  export default {
    components: { ProfileEditor, ItemsEditor},
    data(){
      return {
        currentTab: 0,
        icons: ['profile','work','study','tool','project','prize','twitter'],
        profile: {
          name: '',
          city: '',
          age: '',
          phone: '',
          email: ''
        },
        experience: [
          {company: '', content: ''}
        ],
        education: [{
          school: '',
          duration: '',
          degree: ''
        }],
        skills: [{
          name: '',
          description: ''
        }],
        projects: [{
          name: '',
          link: '',
          description: '',
          keywords: ''
        }],
        awards: [{
          name: '',
          time: ''
        }],
        social: [{
          name: '',
          link: ''
        }]
      }
    }
  }
</script>
<style lang="scss">
  #editor {
    display: flex;
      nav {
        width: 60px;
        ol {
          margin-top: 8px;
        }
        ol > li {
          padding: 16px 0;
          text-align: center;
          > .icon {
            width: 24px;
            height: 24px;
            fill: #888;
          }
          &.active {
            position: relative;
            z-index: 1;
            margin: 0 -10px 0 8px;
            border-radius: 3px;
            background: #fff;
            box-shadow: -2px 1px 1px 1px rgba(0, 0, 0, 0.1);
            > .icon {
              fill: #f56c6c;
            }
          }
        }
      }
    .content {
      margin: 8px;
      border-radius: 3px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
      flex: 1;
      .container {
        position: relative;
        .el-icon-delete {
          font-size: 16px;
          position: absolute;
          right: 0;
          top: 10px;
        }
      }
      > li {
        padding: 8px 32px 32px 32px;
        display: none;
        height: 100%;
        overflow: auto;
        &.active {
          display: block;
        }
      }
    }
  }
</style>
