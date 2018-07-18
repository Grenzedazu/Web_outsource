<template>
    <div>
    <mu-container>
      <mu-grid-list class="gridlist-demo">
        <mu-grid-tile v-for="tile, index in list" :key="index">
          <img :src="tile.image" >
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-button slot="action" icon>
            <mu-icon value="star_border"></mu-icon>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
        </mu-container>
        <mu-flex class="flex-wrapper" justify-content="end">
        <mu-button fab to='Mallcart' style="position:fixed;bottom:70px;z-index:996">
            <mu-icon value="shopping_cart"></mu-icon>
        </mu-button>
        </mu-flex>
    </div>
</template>

<script>export default { 
    // import .jpg from assets
    name: 'mall',
    data(){
        return{
            list :[{
                image: breakfast,
                title: 'breakfast',
                // 其他信息
            },
            {
                
            },
            ]
        }
    }
};
</script>

<style scoped>

</style>
