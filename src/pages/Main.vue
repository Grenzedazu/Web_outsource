<template>
  <div class="home">
    <mu-flex justify-content="center" align-items="center">
    <mu-button round to="profile">
      <mu-icon left value="person"></mu-icon>
      <!-- 更改为获取微信头像,user昵称 -->
      {{username}}, 欢迎回来 
    </mu-button>
    </mu-flex>
    <mu-container>
    <mu-card style="width: 100%; margin: 0 auto;">
  <!-- <mu-card-header sub-title="开发日志">
  </mu-card-header> -->
  <mu-card-media title="公告">
    <img src="#">
  </mu-card-media>
  <mu-card-text>
    {{msg}}
  </mu-card-text>
 </mu-card>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'HOME',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: 'Dev'
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
