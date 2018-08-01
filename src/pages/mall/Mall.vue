<template>
    <div>
    <mu-container>
    <mu-flex justify-content="start">
      <mu-grid-list class="gridlist-demo" col="2">
        <mu-grid-tile v-for="tile, index in list" :key="index">
          <img :src="tile.image" >
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle"><b>{{tile.details}}</b></span>
          <mu-button slot="action"  to="malldetail" icon>
            <mu-icon value="shopping_cart"></mu-icon>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
      </mu-flex>
        </mu-container>
        <mu-flex class="flex-wrapper" justify-content="end">
        <mu-button fab to='Mallcart' style="position:fixed;bottom:70px;z-index:996">
            <mu-icon value="shopping_cart"></mu-icon>
        </mu-button>
        </mu-flex>
    </div>
</template>

<script>
import breakfast from '../../assets/icon.png';

export default {
  // import .jpg from assets
  name: 'mall',
  data() {
    return {
      list: [{
        image: breakfast,
        title: 'breakfast',
        details: '这是测试的早饭',
        // 其他信息
      },
      ],
    };
  },
};
</script>

<style scoped>

</style>
