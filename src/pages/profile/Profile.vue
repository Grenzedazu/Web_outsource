<template>
  <div>
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;padding-bottom: 150px;">
      <mu-card-header style="margin-bottom: 10px">
        <mu-container>
          <mu-row>
            <mu-col span="2" offset="1">
              <mu-avatar slot="avatar">
                <img src="ProfilePhoto.jpg">
              </mu-avatar>
            </mu-col>
            <mu-col span="2" offset="2">
              <div id="balance_title">账户余额</div>
            </mu-col>
            <mu-col span="2" offset="2">
              <div id="balance_price">¥ 13.00</div>
            </mu-col>
          </mu-row>
        </mu-container>
      </mu-card-header>

      <mu-card class="card" style="border-radius:5px;box-shadow: 0px 3px 10px 1px rgb(227, 227, 227);">
        <mu-card-header>
          <mu-container>
            <mu-row>
              <mu-col span="1">
                <mu-icon class="card_icon" size="34" value="edit_location"></mu-icon>
              </mu-col>
              <mu-col span="2">
                <div class="card_title">编辑地址</div>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col span="10" offset="1">
                <div class="blue_container">

                </div>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col class="edit" span="2" offset="10">编辑</mu-col>
            </mu-row>
          </mu-container>
        </mu-card-header>
      </mu-card>

      <mu-card class="card" style="border-radius:5px;box-shadow: 0px 3px 10px 1px rgb(227, 227, 227);">
        <mu-card-header>
          <mu-container>
            <mu-row>
              <mu-col span="1">
                <mu-icon class="card_icon" size="34" value="phone"></mu-icon>
              </mu-col>
              <mu-col span="2">
                <div class="card_title">电话号码</div>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col span="10" offset="1">
                <div class="blue_container" >

                </div>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col class="edit" span="2" offset="10">编辑</mu-col>
            </mu-row>
          </mu-container>
        </mu-card-header>
      </mu-card>

      <mu-card class="card" style="border-radius:5px;box-shadow: 0px 3px 10px 1px rgb(227, 227, 227);">
        <mu-card-header>
          <mu-container>
            <mu-row>
              <mu-col span="1">
                <mu-icon class="card_icon" size="34" value="history"></mu-icon>
              </mu-col>
              <mu-col span="2">
                <div class="card_title">交易记录</div>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col span="10" offset="1">
                <div class="blue_container" >

                </div>
              </mu-col>
            </mu-row>
            <mu-row>
              <mu-col class="edit" span="2" offset="10">编辑</mu-col>
            </mu-row>
          </mu-container>
        </mu-card-header>
      </mu-card>

    </mu-card>
  </div>
</template>

<script>
  export default {
    name: 'profile'
  }
</script>

<style scoped>
  *{
    color: #607D8B;
  }
  .blue_container{
    background-color: #607D8B;
    color: white;
    height: 26px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 6px;
    margin-top: 5px;
  }
  .card{
    width: 86%;
    margin-bottom: 10px;
    margin-left: 7%;
    /*padding-top: 5px;*/
    padding-bottom: 20px;
    border-radius: 8px;

  }
  .card_title{
    position: relative;
    top: 8px;
  }
  .card_icon{
    position: relative;
    left: -15px;
  }
  .edit{
    position: relative;
    top: 10px;
    right: 15px;
    font-size: 13px;
  }
  #balance_title{
    font-size: 16px;
    position: relative;
    top: 10px;
  }
  #balance_price{
    font-size: 17px;
    position: relative;
    top: 10px;
  }
</style>
