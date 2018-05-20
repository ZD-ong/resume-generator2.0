<template>
  <div id="app">
    <Topbar class="topbar"></Topbar>
    <main>
      <Editor class="editor"></Editor>
      <Preview class="preview"></Preview>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'App',
  components: {
    Topbar, Editor, Preview
  }
}
</script>

<style lang="scss">
  html, body, #app {
    height: 100%;
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  h1,h2,h3 {
    font-weight: 300;
  }
  button {
    font-weight: 400;
  }
}
  .topbar {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 3px hsla(0,0,0,0.5);
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  main {
    display: flex;
    flex: 1;
    background: #ddd;
    > .editor {
      transition: all 0.3s;
      width: 40em;
      margin: 16px 8px 16px 16px;
      background: #fff;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      border-radius: 3px;
      overflow: hidden;
    }
    > .preview {
      flex: 1;
      margin: 16px 16px 16px 8px;
      background: #fff;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      border-radius: 3px;
      overflow: hidden;
    }
  }

</style>
