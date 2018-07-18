<template>
  <div id='app' style="position:absolute;width:100%;padding-top:5px">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <mu-bottom-nav :value.sync="shift" shift class="nav" style="position:fixed;bottom:0;width:100%;z-index:997">
        <mu-bottom-nav-item value="delivery" title="快递代拿" icon="transfer_within_a_station" to="/delivery"  tag="div"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="mall" title="线上商超" icon="shopping_cart" to="/Mall"  tag="div"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="schenk" title="堂食外卖" icon="free_breakfast" to="/schenk"  tag="div"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      shift: 'delivery'
    }
  },
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}
.nav {
  box-shadow:4px 4px 8px rgba(0, 0, 0, 0.2); 
}
a {
    text-decoration: none;
    -webkit-tap-highlight-color:transparent;
    -webkit-font-smoothing: antialiased;
}
</style>

