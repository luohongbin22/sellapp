<template>
  <div class="goods-div">
    <div class="left-div">
      <ul class="content">
        <div @click="clickTitle(index)" 
            v-for="(item,index) in goodsList" :key="item.name" 
            :class="{leftGoods:true,selected:index==curIndex}">
          <p>{{item.name}}</p>
        </div>
      </ul>
    </div>
    <div class="right-div">
      <ul class="content">
        <div :id="index" v-for="(item,index) in goodsList" :key="item.id">
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
                >￥{{child.oldPrice?child.oldPrice:''}}</span>
                <!-- <span class="add">
                  <Icon type="md-remove-circle" v-show="child.num>0" @click="clickDec(child.name,-1)"/>
                  <strong v-show="child.num>0">{{child.num}}</strong>
                  <Icon type="md-add-circle"  @click="clickAdd(child.name,1)" />
                </span> -->
                  <button v-show="child.num>0" @click="clickDec(child.name,-1)">-</button>
                  <label v-show="child.num>0">{{child.num}}</label>
                  <button  @click="clickAdd(child.name,1)">+</button>
                  
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
      curIndex:0,//当前的索引值
    };
  },
  created() {
     
    getGoods().then(res => {
      console.log(res.data.data);
      this.$store.commit('initGoodsList', res.data.data);
    });
  },
  mounted() {
    new BScroll(document.querySelector(".left-div"),{
        click:true
    });
    this.rightDiv=new BScroll(document.querySelector(".right-div"),{
      probeType:3 //实时派发滚动事件
    });
    this.rightDiv.on('scroll',(obj)=>{
        let y=Math.abs(obj.y);
    
      // 高频获取（性能优化）
      for(let objDiv of this.getMath){//调用属性
          if(y>=objDiv.min && y<objDiv.max){

              // 就把样式加上
              this.curIndex=objDiv.index;
              return;
          }
      }
    })
  },
  methods:{
      clickTitle(index){
          this.curIndex=index;
          this.rightDiv.scrollToElement(document.getElementById(index),400)
},
      clickDec(name,num){
       this.$store.commit('addnum',{name,num});
        // 点击加减号，改变vuex里面对应的num
      },
        clickAdd(name,num){
          this.$store.commit('addnum',{name,num});
        // 点击加减号，改变vuex里面对应的num
      }
  },
  computed:{
      // eslint-disable-next-line vue/return-in-computed-property
      getMath(){
        let arr=[]
        let total=0;//一开始为零
        // 根据数组索引，获取每一个div的高度
        for(let i=0;i<this.goodsList.length;i++){
          var divHeight=document.getElementById(i).offsetHeight //返回元素的高度 
          // 把拿到的元素高度放到数组存起来
          arr.push({min:total,max:total+divHeight,index:i});

          total+=divHeight;//循环一次加一次自身高度
        }
        // console.log(arr);//最终数组

        return arr;
      },
      goodsList(){
        return this.$store.state.goodsList;  
      },
  
  },
};
</script>

<style lang="less" scoped>
// html,body{
//   height: 100%;
// }
.selected{
    background-color: #fff;
    }
.goods-div {
  display: flex;
  // height: 100%;
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
      .p-div{
         button:nth-of-type(2){
              width: 20px;
              height: 20px;
              text-align: center;
              color: #00a1dc;
              position: fixed;
              right: 10px;
            }
            label{
                 position: fixed;
                 right: 37px;
            }
          button:nth-of-type(1){
              width: 20px;
              height: 20px;
              color: #00a1dc;
              position: fixed;
              right: 50px;
            }
      }
    }
  }
 
}
</style>