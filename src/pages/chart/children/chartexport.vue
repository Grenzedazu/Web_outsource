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

                <mu-list-item-action>
                  <mu-checkbox></mu-checkbox>
                </mu-list-item-action>

                <mu-list-item-content>
                  <mu-list-item-title>奶啤</mu-list-item-title>
                </mu-list-item-content>
                <div class="item_price">¥ 12.00</div>
                <mu-list-item-action>
                  <mu-button color="primary" to="malldetail" flat>详情</mu-button>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>

            <mu-card-actions>
              <mu-row>
                <mu-col span="5" offset="0">
                  <div id="total_title">总金额</div>
                  <div id="total_number">¥ 12.00</div>

                </mu-col>
                <mu-col span="3" offset="2">
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
  export default {};
</script>
<style scoped>
  #total_title{
    font-size: 13px;
    display: inline-block;
    color: rgba(0, 0, 0, .54);
  }
  #total_number{
    font-size: 25px;
    display: inline-block;
    position: relative;
    left: 13px;
    color: #2196f3;
  }
</style>
