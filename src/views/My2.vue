<template>
    <div class="wrap">
        <div class="head">
            <div class="back" @click="gohome">
            </div>
            <div class="title">我的</div>
            <div class="zhanwei"></div>
        </div>

        <My class="my"></My>
    </div>
</template>

<script>
    import My from './My.vue'

    export default {
        name: "My2",
        data(){

            return{

            }

        },

        components:{

            My,

        },
        methods:{

            gohome(){

                this.$router.push('/');

                this.$store.dispatch('setCurindex', 0);

                console.log('success');
            }
        },
        mounted(){

            this.$store.dispatch('setCurindex', 1);

        }
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
    .my{
        margin-top:50px;
    }

</style>
