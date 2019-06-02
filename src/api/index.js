

/*
包含n个接口请求函数的模块
函数的返回值：promise对象
*/

import ajax from './ajax'

const BASE_URL = 'http://172.29.51.137:8899/api/v1';

// 获取登录状态




//测试
export const reqLogin = (phone , pwd) => ajax( BASE_URL+'/user/login' , { phone , pwd} , 'POST');




// 密码登录
export const reqPwdLogin = (phone , pwd) => ajax(BASE_URL+'/user/login', { phone, pwd }, 'POST');

// 获取用户信息
export const reqUserInfo = () =>ajax(BASE_URL+'/user');

// 获取用户收藏的商品信息
export const reqCollect = () => ajax(BASE_URL+'/user/collect');
