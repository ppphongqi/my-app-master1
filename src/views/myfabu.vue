<template>
    <div class="wrap">
        <div class="head">
            <div class="back" @click="back">
            </div>
            <div class="title">我发布的</div>
            <div class="zhanwei"></div>
        </div>

        <div class="block"></div>

<!--        已发布的-->
    <div class="fabuBox" v-if="show">
        <div class="goodsbox" v-for="(item,index) in fabuinfo" :key="item.id">
        <!--<div class="goodsbox">-->
            <div class="username">
                <img :src="url" alt="">
                <p class="name">{{ username }}</p>
                <p class="price"> ￥{{ item.price }}</p>
            </div>


            <div class="swipe">
                <van-swipe :autoplay="3000" v-if="show" height="250" width="300">

                    <van-swipe-item  v-for="(image, index) in item.images" :key="index">

                        <img v-lazy="image" alt=""  class="images" />
                        <!--<img src="./images/111.jpg" />-->

                    </van-swipe-item>

                </van-swipe>
            </div>



            <div class="detail">
                <p class="desc">{{ item.title }}</p>
            </div>

            <div class="bottom">
                <div class="kind"></div>
                <div class="time">{{ item.time }}</div>
            </div>

            <div class="operate">
                <div class="change">修改</div>
                <div class="del">删除</div>
            </div>

        </div>
    </div>
<!--        没有发布的情况-->
        <div class="nothingbox" v-if="hide">
            <div class="nothing">
                <img src="./images/nothing.jpg" alt="">
                <p class="warn">还没有发布宝贝哦</p>
                <van-button type="primary"
                            size="small"
                            @click="tofabu">立即发布</van-button>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        data(){
            return {

                username:'pppty',
                show: true,
                hide: false,

                fabuinfo: [
                    {
                        'title':'网工五天修炼',
                        'id':'1',
                        'price':'125.1',
                        'images':[
                            "http://qiniu.mges.wang/img/2_1.jpg",
                            "http://qiniu.mges.wang/img/2_1.jpg",
                            "http://qiniu.mges.wang/img/2_1.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558077984974&di=567c87caa3a0a5ff35c31566fccef3b2&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F133e91e65d8f3f9e1540b940e70ea3ab352cec5d.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558077984971&di=594a3ef8b1e67a6c0764c8bc3674d4ce&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0736e4bebe05901ac2ef47e6e0554e5f4036ed7c3be13-N48Fka_fw658"
                            ],
                        'desc':'定制的绝对超值你肯定会超级喜欢的那种东西。。。。哈哈哈哈哈的算法框架搭建发哈恢复健康了上帝就发卡顺丰快递哈加快了发货了复读机啊快点发货卡拉收到回复卡拉会离开的技术封锁看到了发哈离开家1',
                        'time':'2019-6-1',


                    },
                    {
                        'id':'1',
                        'price':'123.1',
                        'images':'',
                        'desc':'定制的绝对bu超值',
                        'time':'2019-6-1',

                    },
                    {
                        'id':'1',
                        'price':'129.1',
                        'images':'',
                        'desc':'定制的绝对hui超值',
                        'time':'2019-6-1',

                    },
                ]

            }
        },
        methods:{

            back(){
                this.$router.push({path:'/my2'});
                this.$store.dispatch('setCurindex',1)
            },
            tofabu(){
                this.$router.push({path:'/fabu'})

            }
        },
        // mounted(){
        //     this.username = this.$store.mutation.username
        // }
    }
</script>

<style lang="css" scoped>
    *{
        margin:0;
        padding:0
    }
    .wrap {
        width: 100%;
        height: 100vh;
        background-color: #f7f7f7;
        overflow-y: scroll;
    }
    .head {
        width: 100%;
        height: 3rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index:10;
    }
    .back{
        width:12%;
        height: 3rem;
        position: relative;
        bottom: 0;
        left: 0;
        background:#fff url('images/back.png') no-repeat;
        background-position: 50% 50%;
        background-size: 100% 100% ;
    }
    /*占位*/
    .zhanwei{
        width: 12%;
    }
    .title {
        flex: 1;
        font-size: 1.2rem;
        font-weight: 700;
        position: relative;
        text-align: center;
    }

    div{
        display:block;
    }
    .block{
        height: 3rem;
    }


    /*有发布样式*/
    .goodsbox {
        width: 95%;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        /*align-items: center;*/
        background-color: #fff;
        margin: 0 auto;
        margin-top: 1rem;
    }
    .username {
        display: -webkit-flex;
        display: flex;
        font-size: 1.2rem;
        height: 5rem;
        /*line-height: 5rem;*/
        align-items: center;
        padding: 0rem 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #f6f6f6;
    }
    .username img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
    }
    .name {
        flex:1;
        color: #000;
        font-weight: 700;
        padding-left: 1rem;
        box-sizing: border-box;
        background-position: 0 center;
    }
    .goodstitle{
        height:2.5rem;
        font-size:2rem;
        text-align: center;
    }
    .price {
        color: red;
        font-size: 1.5rem;
    }
    .detail {
        width: 100%;
        margin-top: .8rem;
        padding: 0 1rem;
        box-sizing: border-box;
        overflow: hidden;
    }

    .detail .desc{
        font-size: 1.1rem;
        color: #000;

    }

    .detail .desc{
        font-size: 1.1rem;
        color: #000;
        font-weight: 550;
    }
    .bottom{
        display: -webkit-flex;
        height: 2rem;
        line-height: 2rem;
        padding: 0 1.2rem;
        box-sizing: border-box;
        color: #17abe3;
        border-bottom: 1px solid #f6f6f6;
    }
    .kind {
        flex: 1;
    }
    .time{

    }
    .operate {
        width: 100%;
        height: 4rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        position: relative;

    }
    .change{
        width: 6rem;
        height: 2.5rem;
        text-align:center;
        border:2px solid #3CB371;
        border-radius: 1.4rem;
        line-height:2.25rem;
        color:#3CB371;
        position:absolute;
        right:8rem;
        font-size:1rem;
        font-weight: 400;

    }
    .del {
        width: 6rem;
        height: 2.5rem;
        text-align: center;
        border: 2px solid red;
        border-radius: 1.4rem;
        line-height: 2.25rem;
        color: red;
        position: absolute;
        right: 1.2rem;
        font-size: 1rem;
        font-weight: 400;
    }
    .swipe{
        height:250px;
        z-index:1;
    }
    .images{
        height:100%;
        /*width:90%;*/
        margin:0 auto;
    }



    /*无发布样式*/
    .nothingbox{
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nothing {
        width: 20rem;
        height: 20rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nothing img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    .nothing .warn {
        margin: .6rem 0;
        font-size: 1rem;
        color: #888;
    }

</style>
