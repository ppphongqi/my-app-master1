

export default {
    login:(state) => {
        return state.isLogin
    },
    username:(state) => {
        return state.username
    },
    curindex: (state) => {
        return state.curindex
    },



    fabunum:(state) => {
        return state.fabunum
    },
    colnum:(state) => {
        return state.colnum
    },
    buynum:(state) => {
        return state.buynum
    },

    // 当前物品的数据
    curgood:(state) => {
        return state.curgood
    }

}
