import getters from './getter.js';

const state = {
    isLogin: false,
    fabuinfo: [] ,
    username: '',
    curindex: 0,

    // my  isLogin
    fabunum: 99,  //发布数量
    colnum: 99,  //收藏数
    buynum: 99,  //购买数

    userInfo:[], //用户信息

    curgood:[],



};

const mutations = {


        hasLogin:(state) => {

            state.isLogin = true;

            console.log(`登录状态：`+state.isLogin)
        },

    // 传递当前物品数据
        setCurGood:(state,curgood) =>{
            state.curgood = curgood
        },



        noLogin:(state) => {

            state.isLogin = false;

            console.log('登录状态' + state.isLogin)
        },


        setUsername:(state, username ) =>{

            state.username  = username;

            console.log('用户名：'+ state.username)
        },


        setCurindex:(state,index) =>{

            state.curindex = index;

            console.log('curindex:' + state.curindex )
        },



        // setUserinfo: (state, userinfo) =>{
        //     // window.localStorage.setItem('useravatar',userinfo.avatar);
        //     state.userinfo = userinfo;
        //     console.log(state.userinfo)
        //
        // },




        // 接收用户信息
        receiveInfo:( state, { userInfo })  =>{

            state.userInfo = userInfo;

            console.log(state.userInfo)

        },



        receiveCollect:()=>( state, { userCollect} ) =>{

            state.userCollect =userCollect;

        },







};

export default{
    getters,
    state,
    mutations
}
