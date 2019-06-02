

import axios from 'axios'


import {
    reqCollect,
    reqLogin, reqUserInfo
} from "../api";


export default{

    async haLogin({ commit }) {
        const result = await reqLogin('15559752360','1');

        console.log('失败');

        console.log(result);
        if( result.data === false ){
            alert('wanmei');
            console.log('success');
            const userInfo = result.data;
            commit('receiveInfo', {userInfo})
        }
    } ,

    // 异步获取用户信息
    async getUserInfo({commit}){
        console.log('1.1');
        const result = await reqUserInfo();
        if(result.status === "88"){
            const userInfo = result.data;
            console.log('1.2');
            commit('receiveInfo',{userInfo})
        }
    },


    // 获取收藏信息
    async getCollect({ commit }){
        const result = await reqCollect();
        if(result.status === 200){
            const userCollect = result.data;
            commit('receiveCollect',{userCollect})
        }
    },


    hasLogin:({ commit }) => {
        if(window.localStorage.getItem('phone') != null || window.localStorage.getItem('password') != null ){
            commit('hasLogin')
        }else{
            console.log('没有登录')
        }
    },

    noLogin:({ commit }) => {
        if(window.localStorage.getItem('username') == null && window.localStorage.getItem('password') == null ){
            commit('noLogin')
        }
    },

    setUsername: ({ commit } , username) => {
        commit('setUsername',username )
    },

    setCurindex:({ commit },index) => {
        commit('setCurindex',index)
    },

    setUserinfo: ({commit}, userinfo) =>{
        commit('setUserinfo', userinfo)
    }



}
