<template>
    <div class="dialog" @click="changeDialog">
        <div class="dialog-com" @click.stop>
            <div class="dialog-com-title">手相AI说明</div>
            <div class="dialog-cms-content">
                手不独论，手相AI有<span class="dialog-cms-content-special">3位</span>国内资深相学大师整理的手相学基本概念，和<span class="dialog-cms-content-special">5位</span>人工智能工程师运用深度神经网络学习语言让<span class="dialog-cms-content-special">AI</span>学习近<span class="dialog-cms-content-special">20万</span>拥有<span class="dialog-cms-content-special">108</span>个定位点的真实手相数据，<span class="dialog-cms-content-special">AI</span>测算最精准的数据，匹配手相学大师可能真实还原《手相学》这一中国传统文化的精髓，希望可以展示其中的规律之美。
            </div>
            <div class="dialog-com-check">
                <input class="dialog-com-check-radio" type="radio"/>
                <span>我已阅读并同意<span class="dialog-cms-content-special">《用户隐私协议》</span></span>
            </div>
            <div class="dialog-com-footer">
                <button class="dialog-com-footer-btn" @click="toUpdate">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                dialogFalse: true,
            }
        },
        methods:{
            changeDialog(){
                this.dialogFalse = false
                this.$emit('changeDialog', this.dialogFalse)
            },

            //跳转拍照上传页面
            toUpdate(){
                this.$router.push('/updateImage')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dialog{
        width: 100%;
        height: 100%;
        .dialog-com{
            width: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -40%;
            margin-top: -185px;
            border-radius: 10px;
            color: #333;
            background: #fff;
            padding: 25px 20px;
            box-sizing: border-box;
            text-align: justify;
            .dialog-com-title{
                width: 100%;
                font-size: 20px;
                text-align: center;
            }
            .dialog-cms-content{
                width: 100%;
                font-size: 14px;
                margin-top: 20px;
                line-height: 20px;
            }
            .dialog-com-check{
                width: 100%;
                margin-top: 20px;
                .dialog-com-check-radio{
                    -webkit-appearance: none;
                    appearance: none;
                    outline: none;
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                    vertical-align: center;
                    background: #fff;
                    border: 1px solid #ccc;
                    position: relative;
                    border-radius: 50%;
                    vertical-align: sub;
                    margin: 0 10px 0 0;
                }
                .dialog-com-check-radio:checked::after{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    right: 0;
                    bottom: 0;
                    width: 10px;
                    height: 10px;
                    background-color: #0BA39D ;
                    border-radius: 50%;
                }
            }
            .dialog-com-footer{
                width: 100%;
                margin-top: 20px;
                .dialog-com-footer-btn{
                    width: 100%;
                    height: 40px;
                    background: #0BA39D;
                    border: none;
                    border-radius: 20px;
                    color: #fff;
                    outline: none;
                }
            }
        }
    }
    .dialog-cms-content-special{
        color: #0BA39D
    }




</style>
