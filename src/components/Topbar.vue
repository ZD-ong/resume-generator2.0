<template>
  <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <el-row>
        <el-button type="danger">注册</el-button>
        <el-button>登录</el-button>
      </el-row>
    </div>
  </div>
</template>
<style lang="scss">
  #topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
  }
</style>
