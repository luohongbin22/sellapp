<template>
    <div class="merchanrt-div">
        <div class="merchanrt-info">
            <div class="header">
                <div class="left-div">
                    <p class="name-div">{{data.name}}</p>
                    <p><Rate allow-half v-model="valueHalf" />
                    <span style="margin-right:5px;">({{data.ratingCount}})</span>
                     <span>月售{{data.sellCount}}单</span></p>
                </div>
                <div class="right-div">
                    <Icon type="md-heart"  class="icon-div"/>
                    <p>已收藏</p>
                </div>
            </div>
            <div class="info">
               <div class="info-div"><p>起送价</p><span>{{data.minPrice}}元</span></div>
               <div class="info-div middle-div"><p>商家配送</p> <span>{{data.deliveryPrice}}元</span></div>
               <div class="info-div"><p>平均配送时间</p><span>{{data.deliveryTime}}分钟</span></div>
            </div>
            <!-- 公告 -->
            <div class="notice">
                <h2>公告与活动</h2>
                <p>{{data.bulletin}}</p>
            </div>
            <!-- 特色支持 -->
            <div  class="supports-div">
                <div v-for="(item) in data.supports" :key="item.index" class="for-div">
                    <p style=" border-bottom: 1px solid #ccc;"><img src="../assets/images/decrease_3@2x.png" alt="">{{item.description}}</p> 
                </div>
            </div>
           <!-- 商家实景 -->
           <div class="scene-div">
               <h2>商家实景</h2>
               <div class="images">
                   <img :src="item" v-for="(item) in data.pics" :key="item.id">
               </div>
           </div>
           <!-- 商家信息 -->
           <div class="service-info">
               <h2>商家信息</h2>
                   <div v-for="item in data.infos" :key="item.id" class="service-div">
                       <p>{{ item }}</p>
                   </div>
           </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {getSeller} from '../api/apis.js'
    export default {
        data(){
            return{
                data:{},
                valueHalf:4,
            }
        },
        created(){
                getSeller().then(res=>{
                    this.data=res.data.data;
                })
        }
    }
</script>

<style lang="less" scoped>
//  html,body{
//       height: 100%;
//     }
.merchanrt-div{
        display: flex;
        height: 100%;
    .header{
        flex: 1;
        margin: 16px 14px;
        display: flex;
        border-bottom: 1px solid #ccc;
        .left-div{
            flex: 1.5;
            .name-div{
                font-weight: bold;
            }
        }
        .right-div{
            text-align: center;
            .icon-div{
                font-size: 30px;
                color:red;
            }
        }
    }
    .info{
        flex: 1;
        display: flex;
        justify-content: space-around;
        padding-bottom:14px; 
        border-bottom: 30px solid #F4F5F7;
        .info-div{
            text-align: center;
            span{
                color: #000;
                font-size: 24px;

            }
        }
        .middle-div{
            border-left: 1px solid #ccc;
             border-right: 1px solid #ccc;
             padding: 0 20px;
        }
    }
    .notice{
        flex: 1;
        border-bottom: 1px solid #ccc;
        h2{
            margin-left: 10px;
        }
        p{
            font-size: 16px;
            color: #EE4844;
            padding:10px 20px;
        }
    }
    .supports-div{
        flex: 1;
       border-bottom: 30px solid #F4F5F7;
      text-align: left;
      .for-div{
           img{
            vertical-align: middle;
                margin-right: 10px;
            }
            p{padding: 20px;
            }
      }
     
    }
    // 商家实景
    .scene-div{
        //  height: 100%;
        flex: 1;
        border-bottom: 30px solid #F4F5F7;
        h2{
            padding: 14px;
        }
        .images{
            margin-left: 7px;
            img{
                width:25%;
                height:25%;
                padding: 6px;
            }
        }
      
    }
    // 商家信息
    .service-info{
        height: 40%;
        margin: 16px;
        .service-div{
            border-bottom: 1px solid #ccc;
            padding: 20px 16px;
        }
    }
    }
  
</style>