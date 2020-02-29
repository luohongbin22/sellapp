import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[ 
        {path:'/',name:'Main',component:Main,
        children:[
          {path:'/goods',name:'goods',component:()=> import('../views/Goods.vue')},
          {path:'/evaluate',name:'evaluate',component:()=> import('../views/Evaluate.vue')},
          {path:'/merchanrt',name:'merchanrt',component:()=> import('../views/Merchanrt.vue')},
          {path:'/merchanrt',name:'merchanrt',component:()=> import('../views/Merchanrt.vue')},
        ]},
  
        ]
})
