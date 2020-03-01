<template>
    <div class="evaluate-div">
        <div class="top">
            <div class="left-div">
                <p style="color:#FE9D09;">3.9</p>
                <p>综合评分</p>
                <p>高于周边商家63.8%</p>
            </div>
            <div class="right-div">
                <p>服务态度 <Rate allow-half v-model="valueHalf1" />{{data.serviceScore}}</p>
                <p>服务态度 <Rate allow-half v-model="valueHalf2" />{{data.rankRate}}</p>
                <p>送达时间 33分钟</p>
            </div>
        </div>
        <div class="content-div">
           <div class="button-div">
                <Button :size="buttonSize" type="primary">全部</Button>
                <Button :size="buttonSize" type="default">满意</Button>
                <Button :size="buttonSize" type="default">不满意</Button>
           </div>
           <div class="icon-div"><p><Icon type="md-checkmark-circle" />只看有内容的评论</p></div>
            <!-- 内容 -->
           <div class="evaluate-div">
                  <div v-for="(v,i) in data" :key="i" class="conts">
                      <div class="uesrimg"><img :src="v.avatar" alt=""></div>
                      <div class="txt">
                          <p class="user-time">
                              <span class="username">{{v.username}}</span>
                              <span class="time">{{v.rateTime}}</span>
                          </p>
                          <p class="howtime"><Rate :value.sync="v.score"></Rate>{{v.deliveryTime}}分钟送达</p>
                          <p class="content-text">{{v.text}}</p>
                          <p class="recommend"><Icon type="ios-thumbs-up" />
                            <span v-for="(v) in v.recommend" :key='v.recommend'>{{v}}</span>
                          </p>
                      </div>
                  </div>
           </div>
        </div>
    </div>
</template>

<script>
import { getEvaluate } from '../api/apis'
    export default {
        data(){
            return{
                data:{},
                 buttonSize: 'large',
                 valueHalf1: 2.5,
                 valueHalf2: 2.5,

            }
        },
  created() {
    getEvaluate().then(res => {
      this.data = res.data.data;
      this.data.forEach(function(v) {
        //   v.rateTime=new Date(parseInt(v.rateTime) * 1000).toLocaleString().replace(/年|月/g, "/").replace(/日/g, " ");
        function newtime(sjx) {
            var sj = new Date(sjx);
            var year = sj.getFullYear();
            var month = sj.getMonth() + 1; if (month < 10) { month = '0' + month; }
            var day = sj.getDate(); if (day < 10) { day = '0' + day; }
            var hours = sj.getHours(); if (hours < 10) { hours = '0' + hours; }
            var minutes = sj.getMinutes(); if (minutes < 10) { minutes = '0' + minutes; }
            var seconds = sj.getSeconds(); if (seconds < 10) { seconds = '0' + seconds; }
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        }
        v.rateTime=newtime(v.rateTime);
      });
    });
  }
    
    }
</script>

<style lang="less" scoped>
.top{
    display: flex;
    border-bottom: 30px solid #F4F5F7;
    .left-div{
        width: 40%;
        height: 130px;
        line-height: 30px;
        text-align: center;
        border-right: 1px solid #ccc;
        margin: 25px 10px;
        p:nth-of-type(1){
            font-size: 30px;
        }
         p:nth-of-type(2){
            font-size: 20px;
            font-weight: bold;
        }
         p:nth-of-type(3){
            font-size: 16px;
            color: #ccc;
        }
    }
    .right-div{
        flex:1; 
        height: 130px;
        line-height: 30px;
        margin: 25px 10px;
        p{
            font-size: 13px;
            font-weight: bold;
            .ivu-rate{
                font-size: 16px;
            }
        }
        
        }
}
.content-div{
    .button-div{
    margin: 15px 20px ;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
        Button{
            margin: 5px;
        }
    }
    .icon-div{
        margin: 15px 20px;
    }
    //评价内容
  .evaluate-div{
      border-top: 1px solid #ccc;
    .conts {
      display: flex;
      padding-top: 10px;
      //   头像
      .uesrimg {
        width: 60px;
        height: 60px;
        padding: 0px 10px 0px 10px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      //文字
      .txt {
        flex: 1;
        padding-right: 20px;
        .user-time {
          display: flex;
          justify-content: space-between;
          .username {
            font-size: 16px;
            color: #000;
          }
        }
        .content-text{
            color: #000;
            font-size: 16px;
            line-height: 20px;
            padding: 8px 0px;
            font-weight: 600;
        }
        .recommend {
          .ivu-icon-ios-thumbs-up {
            color: #00a1dc;
            line-height: 14px;
            font-size: 18px;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            margin-left: 5px;
            margin-top: 3px;
            padding: 3px;
            font-size: 14px;
            height: 20px;
            line-height: 14px;
            max-width: 75px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border: 1px solid #ccc;
            vertical-align: middle;
          }
        }
      }
    }
  }

}


</style>