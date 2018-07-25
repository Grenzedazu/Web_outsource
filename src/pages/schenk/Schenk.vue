<template>
<div class="goods" style="dispaly">
    <!-- <div class="menu-wrapper" v-el: menu-wrapper> -->
         <div class="menu-wrapper">
        <ul>
            <li v-for="item in seller" class="menu-item">
                <span class="text">
                    {{item.name}}
                    </span>  
            </li>
        </ul>
    </div>
    <!-- <div class="foods-wrapper" v-el: foods-wrapper> -->
          <div class="foods-wrapper">
        <h1 class="title">菜单</h1>
        <ul>
            <li v-for="food,index in foods" class="food-item">
                <div class="icon">
                    <img width="57" height="57" :src="food.image">
                    </div>
                <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{food.description}}</p>
                <div class="extra">
                    <span>月售{{food.sellCount}}份</span>
                    <span></span>
                </div>
                <div class="price">
                <span>￥{{food.price}}</span>
                </div>
                </div>    
                </li>
        </ul>
    </div>
    <!-- <shopcart></shopcart> -->
</div>
</template>

<script>
import BScroll from 'better-scroll';
// import shopcart from '../../components/shopcart/shopcart';
export default {
    // props: {
    //     seller: {
    //         type:object
    //     }
    // },
    data() {
        return {
            seller:[
                {"name":"沙县小吃"},
                {"name":"温州炒面"},
                {"name":"沙县小吃"},
                {"name":"沙县小吃"},
                {"name":"沙县小吃"},
                {"name":"沙县小吃"},
                {"name":"沙县小吃"},
                {"name":"沙县小吃"},
                {"name":"沙县小吃"},
                {"name":"沙县小吃"},

            ],
            foods:[
                {
                    "name":"test1",
                    "image":"#",
                    "description":"sfafsfsfasffas",
                    "sellCount":"12",
                    "price":"20"
                },
            ]
        }
    },
    methods: {
        // _initScroll(){
        //     this.menuScroll = new BScroll(this.$els.menuWrapper,{});
        //     this.foodsScroll = new BScroll(this.$els.foodsWrapper,{})
        // }
    },
    components: {
        // shopcart
    },
    // create(){
    //     this.$ajax.get('').then(function(res){
                // this.$nextTick(()=>{
                //     this._initScroll
                // })
                // ;
    //     })
    // }
};
</script>

<style scoped>
    .goods{
        display: flex;
        position:absolute;
        width:100%;
        padding-bottom: 46px;
        overflow:hidden;
    }
    .menu-wrapper{
        flex: 0 0 80px;
        width: 80px;
        background-color:#f3f5f7;
    }
    .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;
        padding: 12px;
        /* border-bottom:1px solid #d9dde1 */
    }
    .text{
        display: table-cell;
        font-size:12px;
        width:56px;
        vertical-align: middle 
    }
    .title{
        display: flex;
        padding-left: 14px;
        height: 26px;
        line-height:26px;
        border-left:2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147,153,159);
        background: #f3f5f7;
        overflow:hidden
    }
    .food-item{
        display: flex;
        margin: 18px;
        padding-bottom: 10px;
        border-bottom: 1px solid #d9dde1;
    }
    .image{
        flex: 0 0 57px;
        margin-right: 10px;
    }
    .content{
        flex: 1
    }
    .name{
        display: flex;
        padding-left:12px;
        margin: 2px 0 8px 0;
        height:14px;
        line-height: 14px;
        font-size:14px;
        overflow: hidden;
    }
    .desc,.extra{
        display: flex;
        padding-left: 12px;     
        line-height: 10px;
        font-size: 10px;
        color:rgb(147,153,159)

    }
    .desc{
        margin-bottom: 8px;
        
    }
    .extra{
        margin-right:12px
    }
    .price{
        display: flex;
        font-weight: 700;
        line-height: 24px;
        padding-left: 12px;   
    }
    li{
        list-style:none
    }
    h1,ul,ol{
        margin: 0;
        padding: 0;
    }
</style>
