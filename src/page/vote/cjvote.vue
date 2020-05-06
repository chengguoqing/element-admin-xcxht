<!--创建活动-->
<template>
    <div class="app-container dsfdtery">
        <p class="fz18">
            创建活动
        </p>
        <div class="btm mt10 pt30">
            <div class="mmmndxertr">
                <el-form label-width="150px">
                    <el-form-item label="比赛名称">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="比赛简介">
                        <el-input type="textarea"></el-input>
                    </el-form-item>

                    <el-form-item label="起止时间">
                        <el-date-picker v-model="kjsdd" type="datetimerange" placeholder="选择日期时间" class="w100"> </el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="sdfgytye">
            <p class="fz16 pt20 ">
                选手报名模板：
            </p>

            <div class="btm mt10 pt30">
                <div class="mmmndxertr">
                    <el-form label-width="150px">
                        <el-form-item label="字段1显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="字符请控制在50之内" maxlength="50"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="字段2显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="字符请控制在50之内" maxlength="50"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item label="字段3显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="字符请控制在50之内" maxlength="50"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="字段4显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="字符请控制在50之内" maxlength="50"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="字段5显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input type="textarea" rows="5" placeholder="字符请控制在4000之内" maxlength="4000"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>


                        <el-form-item label="可上传几张图片">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="请输入" maxlength="50"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>


                        <el-form-item label="可上传几个视频">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="请输入" maxlength="50"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item label="一个用户可投几张票">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="请输入" maxlength="50"></el-input>
                                </el-col>
                                <el-col :span="8" class="fz12 z3">
                                    （数值型大于0）
                                </el-col>
                            </el-row>
                            <div class="mt40">
                                <el-button type="primary">保存</el-button>
                                <el-button type="primary" @click="$router.back(-1)">返回</el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
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
                inputValue: '',
                zijdjd: '',
                zijdjdb: '',
                zijdjdc: '',
                zijdjdd: '',
                zijdjde: '',
                zijdjdf: '',
                zijdjdg: '',
                zijdjdh: ''
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

    .sdfgytye {
        border-top: 10px solid #F5F5F5;
    }

</style>
