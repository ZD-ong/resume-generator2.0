<template>
  <div class="action-wrap">
    <div class="signUp">
      <h1>VueResumer</h1>
      <h2>登录</h2>
      <form @submit.prevent="onLogin">
        <div class="formRow">
          <el-input type="text" size="medium" placeholder="请输入邮箱" v-model="formData.username">
          </el-input>
        </div>
        <div class="formRow">
          <el-input type="passsword" size="medium" placeholder="请输入密码" v-model="formData.password">
          </el-input>
        </div>
        <div class="formActions">
          <el-button type="danger" size="mini" native-type="submit" plain>注册</el-button>
          <el-button type="danger" size="mini" native-type="submit">提交</el-button>
        </div>
      </form>
    </div>
    <div class="login" v-if="actionType==='onSignUp'">
      <form @submit.prevent="login">
        <div class="formRow">
          用户名<input type="text">
        </div>
        <div class="formRow">
          密码<input type="password">
        </div>
        <div class="formActions">
          <input type="submit" value="登入">
        </div>
      </form>
    </div>
  </div>
</template>
<script>


  export default {
    props: ['resume'],
    data(){
      return {
        actionType: 'login',
        formData: {
          username: '',
          password: ''
        }
      }
    },
    methods:{
      xxx(){
        this.actionType = login
      }
    }
  }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Pacifico');
  .action-wrap {
    background: #2a333c;
    padding: 0 24px;
    h1 {
      font-family: 'Pacifico', cursive;
      color: #f56c6c;
    }
    h2 {
      text-align: center;
      color: #fff;
      margin: 32px 0;
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

