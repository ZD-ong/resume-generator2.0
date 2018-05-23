<template>
    <div class="signUp" v-cloak>
      <h1>VueResumer</h1>
      <form @submit.prevent="onLogin" v-show="!signUpVisible">
        <h2>登录</h2>
        <i class="el-icon-back" @click="$emit('back'),signUpVisible=false"></i>
        <div class="formRow">
          <el-input type="text" size="medium" placeholder="请输入邮箱" v-model="formData.email">
          </el-input>
        </div>
        <div class="formRow">
          <el-input type="passsword" size="medium" placeholder="请输入密码" v-model="formData.password">
          </el-input>
        </div>
        <div class="formActions">
          <el-button type="danger" size="mini" @click="onClickSignUp" plain>注册</el-button>
          <el-button type="danger" size="mini" native-type="submit">提交</el-button>
        </div>
      </form>
      <form @submit.prevent="onSignUp" v-show="signUpVisible">
        <h2>注册</h2>
        <i class="el-icon-back" @click="$emit('back'),signUpVisible=false"></i>
        <div class="formRow">
          <el-input type="text" size="medium" placeholder="请输入邮箱" v-model="formData.email">
          </el-input>
        </div>
        <div class="formRow">
          <el-input type="passsword" size="medium" placeholder="请输入密码" v-model="formData.password">
          </el-input>
        </div>
        <div class="formActions">
          <el-button type="danger" size="mini" native-type="submit">提交</el-button>
        </div>
      </form>
    </div>
</template>
<script>


  export default {
    props: ['resume'],
    data(){
      return {
        signUpVisible: false,
        formData: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onClickSignUp(){
        this.signUpVisible = true
      }
    }
  }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Pacifico');
  .signUp {
    background: #2a333c;
    padding: 0 24px;
    position: relative;
    h1 {
      font-family: 'Pacifico', cursive;
      color: #f56c6c;
    }
    h2 {
      text-align: center;
      color: #fff;
      margin: 32px 0;
    }
    .el-icon-back {
      font-size: 16px;
      color: #fff;
      position: absolute;
      top: 32px;
      right: 24px;
    }
    .el-icon-back:hover {
      cursor: pointer;
    }
    .formRow {
      margin-bottom: 16px;
    }
    .formActions {
      margin-top: 56px;
      text-align: right;
    }
  }
</style>

