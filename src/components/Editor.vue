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
        <h3>个人信息</h3>
        <el-form>
          <el-form-item label="姓名">
            <el-input v-model="profile.name"></el-input>
          </el-form-item>
          <el-form-item label="城市">
            <el-input v-model="profile.city"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="profile.age"></el-input>
          </el-form-item>
        </el-form>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
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
          <el-button type="danger" @click="addExperience">添加工作经历</el-button>
        </el-form>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <h3>
          教育经历
        </h3>
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
  export default {
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
        ]
      }
    },
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
