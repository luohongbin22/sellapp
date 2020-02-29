// 所有请求统一管理
import axios from 'axios'

let req= axios.create({
    baseURL:'http://192.168.1.4:3000',
    timeout:10000,  //单位是毫秒,请求超时
})

//这个就是axios的封装
// 请求商家信息
export function getSeller(){
    return req.get('/api/seller');
}

// 请求商品信息
export function getGoods(){
    return req.get('/api/goods');
}
// 请求评价信息
export function getEvaluate(){
    return req.get('/api/ratings');
}