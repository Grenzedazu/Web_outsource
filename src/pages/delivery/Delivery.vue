<template>
<div>
  <div>
<mu-container>
  <mu-row>
    <mu-col span="12">
      <mu-card style="width: 100%; margin: 0 auto; padding-bottom：48px">
        <mu-list>
          <mu-sub-header>这些快递即将送达</mu-sub-header>
          <mu-list-item button to="deliverydetails">
            <mu-list-item-content>
              <mu-list-item-title>1  书1</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-button color="primary" to="deliverydetails" flat>订单详情</mu-button>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <mu-list>
          <mu-sub-header>您有这些送达的订单，请确认</mu-sub-header>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>1  MHW</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
                <mu-checkbox></mu-checkbox>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <mu-card-actions>
            <mu-row>
            <mu-col span="3" offset="">
            <mu-button flat color="primary" to="deliveryhistory">历史订单</mu-button>
            </mu-col>
            <mu-col span="3" offset="5">
            <mu-button color="primary">确认收货</mu-button>
            </mu-col>
            </mu-row>
        </mu-card-actions> 
      </mu-card>
    </mu-col>
  </mu-row>
</mu-container>
<mu-flex class="flex-wrapper" justify-content="end">
<mu-button fab to='deliveryinfo' style="position:fixed;bottom:70px;z-index:996">
    <mu-icon value="add"></mu-icon>
</mu-button>
</mu-flex>
</div>
<!-- <div style="padding-top:5px">
      <mu-bottom-nav :value.sync="shift" shift class="nav" style="position:fixed;bottom:0;width:100%;z-index:997">
        <mu-bottom-nav-item value="delivery" title="快递代拿" icon="transfer_within_a_station" to="/delivery"  tag="div"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="mall" title="线上商超" icon="shopping_cart" to="/Mall"  tag="div"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="schenk" title="堂食外卖" icon="free_breakfast" to="/schenk"  tag="div"></mu-bottom-nav-item>
    </mu-bottom-nav>
</div> -->
</div>
</template>

<script>
/* eslint-disable */
export default { 
    name: 'delivery' ,
     data(){
         return{
             
         }
     },
    methods:{
        
  }
};
</script>

<style>
.body {
    width: 100%;
    margin: 0 auto;
}
.flex-wrapper {
    margin-right: 20px;
}

</style>
