/* 
    axios函数
*/
import req from '@/utils/request'

// 获取商品数据
export function getGoods() {
    return req.get('/goods/goods_list')
};

// 获取评价
export function getRatings() {
    return req.get('/shop/ratings')
};

// 获取商家
export function getShop() {
    return req.get('/shop/seller')
};

