<template>
  <div id="app">
    <Topbar  class="topbar" v-show="!previewMode"></Topbar>
    <main>
      <Editor :resume="resume" class="editor" v-show="!previewMode"></Editor>
      <Preview :resume="resume" class="preview" @preview="preview" @exitPreview="exitPreview"></Preview>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'App',
  data(){
    return{
      previewMode: false,
      resume: {
        profile: {
          name: '',
          age: '',
          city: '',
          email: '',
          phone: ''
        },
        experience: [{
          company: '',
          position: '',
          content: ''
        }],
        education: [{
          school: '',
          duration: '',
          degree: ''
        }],
        skills: [{
          name: '',
          description: ''
        }],
        projects: [{
          name: '',
          link: '',
          description: '',
          keywords: ''
        }],
        awards: [{
          name: '',
          time: ''
        }],
        social: [{
          name: '',
          link: ''
        }]
      }
    }
  },
  methods:{
    preview(){
      this.previewMode = true
    },
    exitPreview(){
      this.previewMode = false
    }
  },
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
    box-shadow: 0 0 15px hsla(0,0,0,0.5);
    background: #2a333c;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  #app main {
    display: flex;
    flex: 1;
    background: url("https://i.loli.net/2018/05/21/5b025efc0dd2d.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    > .editor {
      width: 30em;
      margin: 24px 8px 24px 24px;
      background: #fff;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      border-radius: 3px;
      overflow: hidden;
    }
    > .preview {
      flex: 1;
      margin: 24px;
      background: #fff;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      border-radius: 3px;
      overflow: auto;
    }
    .fullScreen {
      padding: 32px;
      margin: 64px 160px;
    }
  }

</style>
