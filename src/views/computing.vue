<template>
    <div class="computing">
        <div class="computing-circle">
            <img src="../assets/img/handPeo.png" alt="">
        </div>
        <div class="computing-tips">正在努力识别你的手相，请耐心等待</div>
        <index-steps class="computing-steps"></index-steps>
        <div class="computing-tips1">照片仅作为识别使用，不作任何其他用途</div>
    </div>
</template>

<script>
    import indexSteps from '../components/indexSteps.vue'
    export default {
        name: "computing",
        data(){
            return{

            }
        },
        components:{
            indexSteps
        }
    }
</script>

<style lang="scss" scoped>
    .computing{
        width: 100%;
        height: 547px;
        background: url('../assets/img/bg.png') no-repeat;
        background-size: 100% 100%;
        padding: 127px 0 0 0 ;
        box-sizing: border-box;
        .computing-circle{
            width: 180px;
            height: 180px;
            border-radius: 100%;
            border: 2px  solid #1AD0CC;
            margin: 0 auto;
            text-align:center;
            img{
                width: 174px;
                height: 174px;
                border-radius: 100%;
                margin-top: 3px;
            }
        }
        .computing-tips{
            width: 100%;
            color: #fff;
            font-size: 14px;
            text-align: center;
            margin-top: 50px;
        }
        .computing-steps{
            width: 100%;
            padding: 0 40px;
            box-sizing: border-box;
            margin-top: 20px;
        }
        .computing-tips1{
            width: 100%;
            color: #fff;
            font-size: 14px;
            text-align: center;
            margin-top: 20px;
        }
    }
</style>
