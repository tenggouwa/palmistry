<template>
    <div class="updateImage">
        <div class="updateImage-title">拍照/上传</div>
        <div class="updateImage-tips">你可以选择打开相册选择或直接拍照</div>
        <div class="updateImage-image">
            <img src="../assets/img/handPeo.png" alt="">
        </div>
        <div class="updateImage-imageTips">满足以下要求结果更准确</div>
        <div class="updateImage-tags">
            <div class="updateImage-tags-item">正面</div>
            <div class="updateImage-tags-item">纯色背景</div>
            <div class="updateImage-tags-item">手指并拢</div>
            <div class="updateImage-tags-item">手掌完整</div>
            <div class="updateImage-tags-item">无遮挡</div>
            <div class="updateImage-tags-item">不戴首饰</div>
        </div>
        <div class="updateImage-btn">
            <button class="updateImage-btn-update" @click="$router.push('Computing')">拍照/上传图片</button>
        </div>
        <div class="updateImage-updateTips">照片仅作为识别使用，不作任何其他用途</div>
    </div>
</template>

<script>
    export default {
        name: "updateImage"
    }
</script>

<style lang="scss" scoped>
    .updateImage{
        width: 100%;
        padding: 30px 20px;
        box-sizing: border-box;
        .updateImage-title{
            font-size: 20px;
            color: #333;
        }
        .updateImage-tips{
            font-size: 14px;
            color: #aaa;
            margin-top: 10px;
        }
        .updateImage-image{
            width: 230px;
            height: 230px;
            margin: 10px auto;
            border: 1px solid #eee;
            display: flex;
            img{
                width: 100%;
                flex: 1;
            }
        }
        .updateImage-imageTips{
            width: 100%;
            text-align: center;
            font-size: 14px;
        }
        .updateImage-tags{
            width: 100%;
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            .updateImage-tags-item{
                padding: 5px 15px;
                border-radius: 13px;
                font-size: 12px;
                color: #9D9D9D;
                background: #EFF3F3;
                display: inline-block;
                margin: 0 10px 10px 0;
            }
        }
        .updateImage-btn{
            width: 100%;
            padding: 0 30px;
            box-sizing: border-box;
            margin-top: 20px;
            .updateImage-btn-update{
                width: 100%;
                height: 40px;
                background: #0BA39D;
                border: none;
                border-radius: 20px;
                color: #fff;
                outline: none;
            }
        }
        .updateImage-updateTips{
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: #9D9D9D;
            margin-top: 10px;
        }
    }
</style>
