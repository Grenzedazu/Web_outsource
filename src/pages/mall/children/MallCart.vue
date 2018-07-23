<template>
    <div>
    <mu-container>
        <mu-row>
    <mu-col span="12">
      <mu-card style="width: 100%; margin: 0 auto; padding-bottom: 48px">
        <mu-list>
          <mu-sub-header>购物车</mu-sub-header>
          <!-- TO-DO嵌套v-for语句 -->
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>1  书1</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-button color="primary" to="malldetail" flat>详情</mu-button>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <mu-card-actions>
            <mu-row>
            <mu-col span="12" offset="">
            <mu-button color="primary" to="orderdetails">结账</mu-button>
            </mu-col>
            </mu-row>
        </mu-card-actions> 
      </mu-card>
      </mu-col>
    </mu-row>
    </mu-container>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
