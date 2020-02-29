<template>
  <div class="goods-div">
    <div class="left-div">
      <ul class="content">
        <div @click="clickTitle(index)" 
            v-for="(item,index) in list" :key="item.name" 
            :class="{leftGoods:true,selected:index==curIndex}">
          <p>{{item.name}}</p>
        </div>
      </ul>
    </div>
    <div class="right-div">
      <ul class="content">
        <div :id="index" v-for="(item,index) in list" :key="item.id">
          <!-- 标题 -->
          <h3>{{item.name}}</h3>
          <!-- 标题下面的儿子 -->
          <div v-for="child in item.foods" :key="child.id" class="foods-div">
            <img :src="child.icon" alt style="width:100px;" />
            <div style="margin-left:15px;">
              <p>{{child.name}}</p>
              <p>{{child.description}}</p>
              <p>
                <span style="margin-right:10px;">月售{{child.sellCount}}份</span>
                <span>好评率{{child.rating}}%</span>
              </p>
              <p class="p-div">
                <span style="color:red;font-size:20px;margin-right:10px;">￥{{child.price}}</span>
                <span
                  style="text-decoration: line-through;"
                >￥{{child.oldPrice?child.oldPrice:child.price}}</span>
                <Icon
                  type="ios-add-circle"
                  style="margin-left:30px;font-size:20px;color:#00A0DC;"
                  class="icon-div"
                />
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      list: [], //商品信息
      curIndex:0,//当前的索引值
    };
  },
  created() {
    getGoods().then(res => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  mounted() {
    new BScroll(document.querySelector(".left-div"),{
        click:true
    });
    this.rightDiv=new BScroll(document.querySelector(".right-div"));
  },
  methods:{
      clickTitle(index){
          this.curIndex=index;
          this.rightDiv.scrollToElement(document.getElementById(index),400)
}
  }
};
</script>

<style lang="less" scoped>
.selected{
    background-color: #fff;
    }
.goods-div {
  display: flex;
  .left-div {
    width: 100px;
    height: 500px;
    padding: 0 10px;
    background: #f4f5f7;
    overflow: scroll;
    overflow: hidden;
    .leftGoods {
      width: 80px;
      height: 60px;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
  }
  .right-div {
    flex: 1;
    overflow: scroll;
    height: 500px;
    overflow: hidden;
    .foods-div {
      display: flex;
      align-items: flex-start;
      padding: 15px;
      .p-div {
        position: relative;
        .icon-div {
          position: absolute;
          right: 0;
          line-height: 30px;
        }
      }
    }
  }
}
</style>