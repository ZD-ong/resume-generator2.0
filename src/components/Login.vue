<template>
    <div class="signUp" v-cloak>
      <h1>VueResumer</h1>
      <form @submit.prevent="onLogin" v-show="!signUpVisible">
        <h2>登录</h2>
        <i class="el-icon-back" @click="$emit('back'),signUpVisible=false"></i>
        <div class="formRow">
          <el-input type="text" size="medium" placeholder="请输入邮箱" v-model="formData.username">
          </el-input>
        </div>
        <div class="formRow">
          <el-input type="password" size="medium" placeholder="请输入密码" v-model="formData.password">
          </el-input>
        </div>
        <div class="formActions">
          <el-button type="danger" size="mini" @click="onClickSignUp" plain>注册</el-button>
          <el-button type="danger" size="mini" native-type="submit">登录</el-button>
        </div>
      </form>
      <form @submit.prevent="onSignUp" v-show="signUpVisible">
        <h2>注册</h2>
        <i class="el-icon-back" @click="$emit('back'),signUpVisible=false"></i>
        <div class="formRow">
          <el-input type="text" size="medium" placeholder="请输入邮箱" v-model="formData.username">
          </el-input>
        </div>
        <div class="formRow">
          <el-input type="password" size="medium" placeholder="请输入密码" v-model="formData.password">
          </el-input>
        </div>
        <div class="formActions">
          <el-button type="danger" size="mini" native-type="submit">注册</el-button>
        </div>
      </form>
    </div>
</template>
<script>
  import AV from 'leancloud-storage'
  import '../main.js'


  export default {
    props: ['resume'],
    data(){
      return {
        signUpVisible: false,
        formData: {
          username: '',
          password: ''
        },
        currentUser: null
      }
    },
    methods: {
      onClickSignUp(){
        this.signUpVisible = true
      },
      onSignUp(){
        const user = new AV.User()
        user.setUsername(this.formData.username)
        user.setPassword(this.formData.password)

        user.signUp().then(()=>{
          AV.User.logIn(this.formData.username,this.formData.password)
          this.$emit('logined')
        },(error)=>{
          alert(error.rawMessage)
        })
      },
      onLogin(){
        AV.User.logIn(this.formData.username,this.formData.password).then((user)=>{
          console.log(AV.User.current())
          this.$emit('logined')
        },(error)=>{
          console.log(error)
        })
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

