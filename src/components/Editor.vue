<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]"
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
        <ExperienceEditor :experience="experience"></ExperienceEditor>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <EducationEditor :education="education"></EducationEditor>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <h3>
          项目经验
        </h3>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <h3>
          获奖情况
        </h3>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <h3>
          联系方式
        </h3>
      </li>
      <!--<li v-for="i in [0,1,2,3,4,5]"-->
          <!--:class="{active:currentTab === i}">{{i}}</li>-->
    </ol>
  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor'
  import ExperienceEditor from './ExperienceEditor'
  import EducationEditor from  './EducationEditor'
  export default {
    components: { ProfileEditor, ExperienceEditor, EducationEditor},
    data(){
      return {
        currentTab: 0,
        icons: ['profile','work','study','project','prize','phone'],
        profile: {
          name: '',
          city: '',
          age: ''
        },
        experience: [
          {company: '', content: ''}
        ],
        education: [{
          school: '',
          duration: '',
          degree: ''
        }]
      }
    }
  }
</script>
<style lang="scss">
  #editor {
    display: flex;
      nav {
        background: #2a333c;
        width: 60px;
        ol > li {
          padding: 16px 0;
          text-align: center;
          > .icon {
            width: 24px;
            height: 24px;
            fill: #fff;
          }
          &.active {
            background: #fff;
            > .icon {
              fill: #2a333c;
            }
          }
        }
      }
    .content {
      flex: 1;
      .container {
        position: relative;
        .el-icon-delete {
          font-size: 16px;
          color: #606266;
          position: absolute;
          right: 0;
          top: 10px;
        }
      }
      > li {
        padding: 32px;
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
