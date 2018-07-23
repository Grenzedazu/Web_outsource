<template>
    <div>
      <mu-container>
    <mu-card style="width: 100%; margin: 0 auto;padding-bottom: 48px">
  <!-- <mu-card-header title="请设置您的送达时间">
    </mu-card-header> -->
    <mu-card-title sub-title="订单详情"></mu-card-title>
    <mu-col span="12" offset="">
<mu-date-input  icon="today" v-model="delivery_time" label="选择日期和时间" type="dateTime" style="width: 75%" label-float landscape></mu-date-input>
    <mu-card-title sub-title="你的快递大小"></mu-card-title>
    <mu-radio v-model="radio.size" value="L" uncheck-icon="view_stream_border" checked-icon="view_stream" label="大"></mu-radio>
    <!-- <mu-radio v-model="radio.size" value="M" uncheck-icon="view_quilt_border" checked-icon="view_quilt" label="中"></mu-radio> -->
    <mu-radio v-model="radio.size" value="S" uncheck-icon="view_module_border" checked-icon="view_module" label="小"></mu-radio>
    <mu-card-title sub-title="送达地址"></mu-card-title>
      <mu-select label="" v-model="address_selected_option.delivery_address" style="width: 75%" icon="location_on">
        <mu-option v-for="option,index in address_options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
    <mu-card-title sub-title="快递信息"></mu-card-title>
    <mu-container>
    <mu-col span="6" offset="3"><div class="grid-cell"></div></mu-col>
    <mu-text-field v-model="delivery_info" placeholder="       将快递信息复制到这里面" multi-line :rows="4" style="width: 75%" icon="edit"></mu-text-field><br/>
    </mu-container>
  <mu-card-actions>
            <mu-row>
            <mu-col span="6" offset="3">
            <mu-button color="primary">取消订单</mu-button>
            </mu-col>
            </mu-row>
  </mu-card-actions>
  </mu-col>
  </mu-card>
</mu-container>
    </div>
</template>
<script>
export default {
name: 'deliverydetails',
  data(){
    return{
      delivery_time: '2018-07-17 21:59',
      delivery_info: 'test_text',
      price: {
        L_price:'¥30',
        M_price:'¥20',
        S_price:'¥10',
      },
      radio: {
        value1: [],
        size: 'L',
      },
      address_options:[
        'test1','test2','test3'
      ],
      address_selected_option: {
        delivery_address: 'test2',
      }
    }
  }
}
</script>
<style scoped>

</style>

