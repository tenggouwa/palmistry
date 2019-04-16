<template>
    <div class="steps">
        <div class="steps-item">
            <div class="steps-item-loading">
                <div class="steps-item-loading-circle"></div>
                <div class="steps-item-loading-border"></div>
            </div>
            <div class="steps-item-font">指相分析</div>
        </div>
        <div class="steps-item">
            <div class="steps-item-loading">
                <div class="steps-item-loading-circle"></div>
                <div class="steps-item-loading-border"></div>
            </div>
            <div class="steps-item-font">掌纹分析</div>
        </div>
        <div class="steps-item1">
            <div class="steps-item-loading">
                <div class="steps-item-loading-circle"></div>
            </div>
            <div class="steps-item-font">综合分析</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "indexSteps"
    }
</script>

<style lang="scss" scoped>
    .steps{
        width: 100%;
        display: flex;
        .steps-item{
            flex: 1;
            .steps-item-loading{
                width: 100%;
                overflow: hidden;
                .steps-item-loading-border{
                    width: calc(100% - 18px);
                    height: 4px;
                    background: #00FFF6;
                    float: left;
                    margin-top: 7px;
                }
                .steps-item-loading-circle{
                    width: 18px;
                    height: 18px;
                    float: left;
                    -webkit-border-radius: 18px;
                    -moz-border-radius: 18px;
                    border-radius: 18px;
                    background: #00FFF6;
                }
            }
            .steps-item-font{
                width: 100%;
                margin-top: 5px;
                font-size: 14px;
                color: #00FFF6
            }
        }
        .steps-item1{
            .steps-item-loading{
                width: 18px;
                overflow: hidden;
                .steps-item-loading-circle{
                    width: 18px;
                    height: 18px;
                    float: left;
                    -webkit-border-radius: 18px;
                    -moz-border-radius: 18px;
                    border-radius: 18px;
                    background: #00FFF6;
                }
            }
            .steps-item-font{
                width: 100%;
                margin-top: 5px;
                font-size: 14px;
                color: #00FFF6
            }
        }
    }
</style>
