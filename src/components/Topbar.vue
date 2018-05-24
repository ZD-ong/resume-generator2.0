<template>
  <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <el-row>
        <el-button type="danger" @click="onLogin" >登录</el-button>
        <el-button type="danger" @click="onLogOut" plain >注销</el-button>
      </el-row>
    </div>
</div>
</template>
<script>
  import AV from 'leancloud-storage'
  import '../main.js'
export default {
  data(){
    return {
      currentUser: {
        id: ''
      }
    }
  },
  created(){
    let currentUser = AV.User.current()
    if(currentUser){
      this.currentUser.id = currentUser.id
      console.log(currentUser)
    }
  },
  methods: {
    onLogin(){
      this.$emit('goToLogin')
    },
    onLogOut(){
      this.currentUser = null
      AV.User.logOut()
      setTimeout(window.location.reload(),0)
    }
  }
}

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Pacifico');

  #topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    font-size: 24px;
    .logo {
      padding: 8px 16px;
      font-size: 28px;
      font-family: 'Pacifico', cursive;
      color: #f56c6c;
    }
  }
</style>
