<template>
  <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <el-row>
        <el-button type="danger" @click="signUp">登录</el-button>
      </el-row>
    </div>
</div>
</template>
<script>
export default {
  methods: {
    signUp(){
      this.$emit('xxx')
      this.$emit('yyy')
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
