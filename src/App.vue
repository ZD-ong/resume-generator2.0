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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
  .topbar {

  }
  main {
    display: flex;
    flex: 1;
    > .editor {
      width: 20em;
    }
    > .preview {
      flex: 1;
    }
  }

</style>
