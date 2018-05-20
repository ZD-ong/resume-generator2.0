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
      <li v-for="i in [0,1,2,3,4,5]"
          :class="{active:currentTab === i}">{{i}}</li>
    </ol>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        currentTab: 0,
        icons: ['profile','work','study','project','prize','phone']
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
      > li {
        display: none;
        &.active {
          display: block;
        }
      }
    }
  }
</style>
