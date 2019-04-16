<template>
    <div class="index-main">
        <div class="index-main-header">什么什么信息全方位保护，放心使用吧~</div>
        <div class="index-main-body">
            <div class="index-main-body-title">人工智能看手相</div>
            <div class="index-main-body-circle">
                <img src="../assets/img/hand.png">
                <div class="index-main-body-circle-small">
                    <img src="../assets/img/circle2.png" alt="">
                    <div class="index-main-body-circle-small-cir"></div>
                </div>
                <div class="index-main-body-smallCircle index-main-body-love">测爱情</div>
                <div class="index-main-body-smallCircle index-main-body-career">测事业</div>
                <div class="index-main-body-smallCircle index-main-body-money">测财运</div>
            </div>

        </div>
        <div class="index-main-body-footer">
            <div class="index-main-body-box">
                <div class="index-main-body-box-bag">
                    <div class="index-main-body-box-small"><i class="iconfont icon-jiahao"></i>添加新手相</div>
                    <div class="index-main-body-box-small">添加新手相</div>
                    <div class="index-main-body-box-small">添加新手相</div>
                </div>
            </div>
            <div class="index-main-body-btn">
                <button class="index-main-body-btn-check" @click="dialogFalse = true"><i class="iconfont icon-qunzu"></i>好友匹配 查看缘分</button>
            </div>
        </div>
        <transition name="fade">
            <index-dialog class="indexDialog" v-if="dialogFalse" v-on:changeDialog="getDialog"></index-dialog>
        </transition>
    </div>
</template>

<script>
    import indexDialog from '../components/dialog.vue'
    export default {
        name: "index",
        data(){
            return{
                dialogFalse: false
            }
        },
        components:{
            indexDialog
        },
        methods:{
            getDialog(val){
                console.log(val)
                this.dialogFalse = val
            }
        }
    }
</script>

<style lang="scss" scoped>
    .index-main{
        width: 100%;
        height: 100%;
        color: #FFFFFF;
        position: relative;
        .index-main-header{
            width: 100%;
            height: 28px;
            line-height: 28px;
            box-sizing: border-box;
            font-size: 10px;
            letter-spacing: 0;
            padding: 0 5px;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
            z-index: 2;
            text-align: left;
        }
        .index-main-body{
            height: 100%;
            padding: 28px 35px 0 35px;
            background-color: #001729;
            background-image: url('../assets/img/background.png');
            background-repeat: no-repeat;
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
            .index-main-body-title{
                width: 100%;
                font-size: 33px;
                text-align: center;
                letter-spacing: 2px;
            }
            .index-main-body-circle{
                width: 100%;
                margin: 60px auto 0 auto;
                box-sizing: border-box;
                position: relative;
                img{
                    width: 100%;
                }
                .index-main-body-circle-small{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: 2;
                    left: 0;
                    top: 0;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .index-main-body-circle-small-cir{
                        width: 80%;
                        height: 80%;
                        position: absolute;
                        box-sizing: border-box;
                        z-index: 3;
                        top: 8%;
                        left: 9%;
                        border-radius: 100%;
                        border: 5px solid #00FFF6;
                    }
                }
                .index-main-body-smallCircle{
                    width: 80px;
                    height: 80px;
                    line-height: 80px;
                    font-size: 16px;
                    text-align: center;
                    background: url('../assets/img/circle.png') no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                }
                .index-main-body-love{
                    top: -15px;
                    left: -20px;
                }
                .index-main-body-career{
                    top: 30px;
                    right: -35px;
                }
                .index-main-body-money{
                    bottom: -20px;
                    left: 5px;
                }
            }


        }
        .index-main-body-footer{
            position: absolute;
            z-index: 4;
            bottom: 30px;
            overflow: hidden;
            .index-main-body-box{
                width: 100%;
                height: 63px;
                overflow-x: scroll;
                overflow-y: hidden;
                padding-left: 20px;
                .index-main-body-box-bag{
                    width: 100%;
                    height: 100%;
                    .index-main-body-box-small{
                        width: 120px;
                        height: 63px;
                        line-height: 63px;
                        float: left;
                        text-align: center;
                        font-size: 16px;
                        background: url('../assets/img/border.png') no-repeat;
                        background-size: 100% 100%;
                        margin-right: 15px;
                        i{
                            color: #00FFF6;
                            margin-right: 2px;
                        }
                    }
                }

            }
            .index-main-body-btn{
                width: 100%;
                text-align: center;
                margin-top: 30px;
                .index-main-body-btn-check{
                    padding: 10px 30px;
                    font-size: 14px;
                    background: #0BA39D;
                    color: #fff;
                    letter-spacing: 1px;
                    -webkit-border-radius: 20px;
                    -moz-border-radius: 20px;
                    border-radius: 20px;
                    border: none;
                    outline: none;
                    i{
                        font-size: 24px;
                        margin-right: 5px;
                        vertical-align: middle;
                    }
                }
            }
        }
        .indexDialog{
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.3);
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
