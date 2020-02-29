/* eslint-disable no-unused-vars */
<template>
    <div class="main">
        <!-- 主页面 -->
         <!-- 头部 -->
        <div class="top" :style="{backgroundImage:'url('+data.avatar+')'}">
            <!-- 商家信息 -->
            <div class="message">
                <div class="img">
                    <img :src="data.avatar" alt="">
                </div>
                <div class="txt">
                    <p><span class="pp">品牌</span><span class="title">{{data.name}}</span></p>
                    <p><span>{{data.description}}</span> / <span>{{data.deliveryTime}}分钟送达</span></p>
                    <p><span class="jian">减</span>{{data.supports?data.supports[0].description:''}}</p>
                </div>
                <div class="picture">5个></div>
            </div>
            <!-- 公告 -->
            <div class="ad">
                <span class="ad_box">公告</span>
                {{data.bulletin}}
            </div>
        </div>

       <!-- <div class="seller-info" :style="{backgroundImage:'url('+data.avatar+')'}">
           <div class="left-info">
               <img :src="data.avatar" alt="" width="100px" style="padding:20px">
           </div>
            <div class="right-info">
                <h2><img src="../assets/images/brand@2x.png" alt="" width="30px" style="margin-right:5px">{{data.name}}</h2>
                <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
                <p><img src="../assets/images/decrease_3@2x.png" alt="" width="15px" style="margin-right:5px">{{data.supports?data.supports[0].description:''}}</p>
           </div>
       </div> -->
       <!-- 公告 -->
                <!-- <p class="bulletin" :style="{backgroundImage:'url('+data.avatar+')'}"><img src="../assets/images/bulletin@2x.png" alt="" width="30px" style="background:#fff;">{{data.bulletin}}</p> -->
                

        <div class="router-link-div">
            <router-link to="/goods">商品</router-link>
            <router-link to="/evaluate">评价</router-link>
            <router-link to="/merchanrt">商家</router-link>
        </div>
        <!-- 二级路由出口 -->
        <router-view></router-view>

        <div class="shopcar-bar">
           <div class="shopcar-box1">
             <img src="../assets/images/car.png">
             <span class="price">￥0</span>
             <span class="song">另需配送费￥4元</span>
           </div>
           <div class="shopcar-box2">
             ￥20起送
           </div>
        </div>
    </div>
</template>

<script>
// 引入附送的api请求,解构函数 
import {getSeller} from '../api/apis.js'
    export default {
            data(){
                return{
                    // eslint-disable-next-line no-undef
                    data:{},//商家信息
                }
            },
            created(){
               getSeller().then((res)=>{
                    console.log(res.data.data);
                   this.data=res.data.data;
                });
              
            }
    }
</script>

<style lang="less" scoped>

.top {
  .message {
    width: 100%;
    height: 120px;
    padding: 20px 30px 20px 20px;
    display: flex;
    justify-content: space-around;
    background: rgba(15, 10, 10, 0.7);
    position: relative;
    .img {
      img {
        width: 70px;
        height: 70px;
        margin-top: 5px;
      }
    }
    .txt {
      color: white;
      margin-left: 5px;
      .title {
        font-size: 18px;
        font-weight: bold;
      }
      .pp {
        display: inline-block;
        background: red;
        color: white;
        font-weight: bold;
        font-size: 13px;
        width: 34px;
        height: 20px;
        text-align: center;
        margin-right: 10px;
      }
      p:nth-last-of-type(2) {
        margin: 5px 0px;
      }
      p:last-of-type {
        font-size: 13px;
      }
      .jian {
        display: inline-block;
        background: white;
        color: red;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        margin-right: 5px;
      }
    }
    .picture {
      width: 50px;
      height: 30px;
      background: rgba(15, 10, 10, 0.4);
      color: white;
      text-align: center;
      line-height: 30px;
      border-radius: 25px;
      font-size: 12px;
      margin-top: 55px;
      position: absolute;
      bottom: 10px;
      right: 20px;
    }
  }
  .ad {
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background: rgba(5, 4, 4, 0.7);
    .ad_box {
      display: inline-block;
      width: 26px;
      height: 14px;
      font-weight: bold;
      text-align: center;
      line-height: 14px;
      font-size: 11px;
      background: white;
      color: black;
      margin-right: 4px;
    }
  }
}
    .router-link-div{
        border-bottom: 1px solid #444;
        display: flex;
        justify-content: space-around;
        a{ 
        color: #000;
        padding:20px 0; 
        cursor: pointer;
        }
        .router-link-exact-active{
            color:#f00;
        }
    }
    // 购物车
 .shopcar-bar {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  background: #141c27;
  display: flex;
  justify-content: space-between;
  .shopcar-box1 {
    width: 70%;
    height: 30px;
    padding: 15px 0px;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
    position: relative;
    img {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 20px;
      top: -10px;
      border: 3px solid #141c27;
      border-radius: 50%;
    }
    .price {
      display: inline-block;
      width: 50px;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      border-right: 1px solid gray;
      margin-left: 50px;
    }
    .song {
      display: inline-block;
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 13px;
      margin-left: 10px;
    }
  }
  .shopcar-box2 {
    width: 30%;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    color: rgb(146, 146, 146);
    background: rgb(58, 57, 57);
  }
}
</style>