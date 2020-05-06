<!--创建活动-->
<template>
    <div class="app-container dsfdtery">
        <p class="fz18">
            创建活动
        </p>
        <div class="btm mt10 pt30">
            <div class="mmmndxertr">
                <el-form label-width="80px">
                    <el-form-item label="活动主题">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="活动介绍">
                        <el-input type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="视频链接">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="宣传图">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                    <el-form-item label="选择标签">
                        <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
                            {{tag}}
                        </el-tag>
                        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                    </el-form-item>
                    <el-form-item label="截止时间">
                        <el-date-picker v-model="kjsdd" type="datetime" placeholder="选择日期时间" class="w100"> </el-date-picker>

                        <div class="mt40">
                            <el-button type="primary">保存</el-button>
                            <el-button type="primary">立即发布</el-button>
                        </div>
                    </el-form-item>
                </el-form>

            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                kjsdd: '',
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: ''
            }
        },
        components: {},
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        },
        mounted() {}
    }

</script>
<style>
    .dsfdtery .el-upload--picture-card,
    .dsfdtery .el-upload-list--picture-card .el-upload-list__item {
        width: 100px;
        height: 100px;
        line-height: 100px
    }

</style>
<style lang='scss' scoped>
    .mmmndxertr {
        width: 640px
    }

</style>
