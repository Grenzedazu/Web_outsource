<template>
  <div>
    <mu-container>
      <mu-container>
        <mu-card style="width: 100%; margin: 0 auto;padding-bottom: 30px;margin-top: 10px">
          <div id="title_cover"></div>
          <div id="title">奶啤啤酒</div>
          <img src="../children/peer.jpg">
          <div id="detail">
            <div id="detail_title">商品详情</div>
            <div id="details">奶啤被称为“奶香槟”，是一种新型的酸味爽口、营养丰富的含有酒精的乳饮料。</div>
          </div>
          <mu-card-actions>
            <mu-row>
              <mu-col span="3" id="price_title">商品单价</mu-col>
              <mu-col span="3" offset="6">
                <mu-button flat color="primary" id="cart_button">加入购物车</mu-button>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col span="3" id="price_number">¥ 12.00</mu-col>
              <mu-col span="3" offset="6">
                <mu-button color="primary" to="orderdetails">购买</mu-button>
              </mu-col>
            </mu-row>
          </mu-card-actions>
        </mu-card>
      </mu-container>
    </mu-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
  };
</script>
<style scoped>
  img {

    width: 100%
  }

  #title {
    /*background-color: gray;*/
    color: white;
    font-size: 15px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 6px);
    opacity: 1;
  }

  #title_cover {
    width: 100%;
    height: 35px;
    position: absolute;
    background-color: gray;
    opacity: 0.8;
  }

  #detail {
    margin-top: 40px;

  }

  #detail_title {
    /*position: relative;*/
    margin-left: 30px;
    font-size: 13px;
    color: rgba(0, 0, 0, .54);
    /*left: 30px;*/
    text-align: left;
  }

  #details {
    text-align: left;
    position: relative;
    left: 50px;
    font-size: 10px;
    margin-top: 5px;
    width: 260px;
    margin-bottom: 20px;
  }

  #cart_button {
    font-size: 13px;
    /*text-align: left;*/
    width: 97px;
    position: relative;
    left: -12px;
  }

  #price_title {
    color: #2196f3;
    position: relative;
    top: 14px;
    font-size: 12px;
    left: 20px;
  }

  #price_number {
    color: #2196f3;
    font-size: 25px;
    position: relative;
    left: 40px;
  }

</style>
