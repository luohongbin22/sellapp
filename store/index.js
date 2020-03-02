import Vue from 'vue'

import Vuex  from 'vuex'

Vue.use(Vuex);

// 创建一个仓库，拿来存放所有需要交互的数据
// store：vuex最核心的部分，
export default new Vuex.Store({
    state:{
        // 存放交互的数据
        name:'lisi',
        obj:{name:'11',age:11},

        goodsList:[],//所有商品数组
    },
    // 它是改变state的唯一方式
    mutations:{
        changeName(state,name){
                // state.name='张三';
                state.name=name
        },
        // 初始化商品列表小函数
        initGoodsList(state,newArr){
            state.goodsList=newArr;
        },

        // 加减
        addnum(state,newNum){
            for(let i of state.goodsList){
                    for(let j of i.foods){
                        // 判定
                        if(j.name==newNum.name){
                            j.num+=newNum.num;
                        }
                    }
            }
        },
    },
    // 跟vue中的计算属性一个意思
    getters:{
        getGoodslist(state){
          return state.goodsList;
        }
    }
});
