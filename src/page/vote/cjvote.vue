<!--创建活动-->
<template>
    <div class="app-container dsfdtery">
        <p class="fz18">
            创建活动
        </p>
        <el-form label-width="150px" :model="form" :rules="rules" ref="ruleForm">
            <div class="btm mt10 pt30">
                <div class="mmmndxertr">

                    <el-form-item label="比赛名称" prop="matchSubject">
                        <el-input v-model="form.matchSubject"></el-input>
                    </el-form-item>
                    <el-form-item label="比赛简介" prop="activityDesc">
                        <el-input type="textarea" v-model="form.activityDesc"></el-input>
                    </el-form-item>
                    <el-form-item label="头像" prop="headImgUrl">
                        <div class="avatar-uploader">
                            <el-upload :show-file-list="false" action :http-request="upload" :before-remove="deleece">
                                <i class="el-icon-plus fz30 cz" v-if="!form.headImgUrl"></i>
                                <img :src="form.headImgUrl" v-else class="w100 h100">
                            </el-upload>
                        </div>
                    </el-form-item>
                    <el-form-item label="起止时间">
                        <el-date-picker v-model="kjsdd" type="datetimerange" placeholder="选择日期时间" class="w100"> </el-date-picker>
                    </el-form-item>
                </div>
            </div>
            <div class="sdfgytye">
                <p class="fz16 pt20 ">
                    选手报名模板：
                </p>

                <div class="btm mt10 pt30">
                    <div class="mmmndxertr">
                        <el-form-item label="字段1显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="字符请控制在50之内" maxlength="50" v-model="form.field1"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer" v-model="form.field1Fill"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="字段2显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="字符请控制在50之内" maxlength="50" v-model="form.field2"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer" v-model="form.field2Fill"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer" v-model="form.field2Show"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item label="字段3显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="字符请控制在50之内" maxlength="50" v-model="form.field3"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer" v-model="form.field3Fill"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer" v-model="form.field3Show"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="字段4显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="字符请控制在50之内" maxlength="50" v-model="form.field4"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer" v-model="form.field4Fill"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer" v-model="form.field4Show"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="字段5显示名称">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input type="textarea" rows="5" placeholder="字符请控制在4000之内" maxlength="4000" v-model="form.field5"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer" v-model="form.field5Fill"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer" v-model="form.field5Show"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>


                        <el-form-item label="可上传几张图片">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="请输入" maxlength="50" v-model="form.imgNum"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer" v-model="form.imgNumCheck"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer" v-model="form.imgNumShow"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>


                        <el-form-item label="可上传几个视频">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="请输入" maxlength="50" v-model="form.videoNum"></el-input>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="必填" key="0" class="fdgtyxxeer" v-model="form.videoNumCheck"></el-checkbox>
                                </el-col>
                                <el-col :span="4">
                                    <el-checkbox label="显示" key="0" class="fdgtyxxeer" v-model="form.videoNumShow"></el-checkbox>
                                </el-col>
                            </el-row>
                        </el-form-item>

                        <el-form-item label="一个用户可投几张票">
                            <el-row>
                                <el-col :span="16" class="pr20">
                                    <el-input placeholder="请输入" maxlength="50" v-model="form.maxVoteNum"></el-input>
                                </el-col>
                                <el-col :span="8" class="fz12 z3">
                                    （数值型大于0）
                                </el-col>
                            </el-row>
                            <div class="mt40">
                                <el-button type="primary" @click="submitForm">保存</el-button>
                                <el-button type="primary" @click="$router.back(-1)">返回</el-button>
                            </div>
                        </el-form-item>

                    </div>
                </div>
            </div>
        </el-form>
    </div>
</template>
<script>
    import {
        upimg
    } from '@/assets/js/base'
    export default {
        data() {
            return {
                kjsdd: '',
                lksd: false,
                form: {
                    matchSubject: '', // 比赛名称
                    activityDesc: '', // 比赛简介
                    headImgUrl: '', // 头图URL
                    matchStartTime: '', // 活动开始时间	
                    matchEndTime: '', // 活动线束时间	
                    field1: '', // 字段1显示名称
                    field1Fill: false, // 0：校验 1：不校验
                    field1Show: true, //  0：显示 1：不显示 
                    field2: '', // 字段2显示名称
                    field2Fill: false, // 0：校验 1：不校验
                    field2Show: false, //  0：显示 1：不显示 
                    field3: '', // 字段3显示名称
                    field3Fill: false, // 0：校验 1：不校验
                    field3Show: false, //  0：显示 1：不显示 
                    field4: '', // 字段4显示名称
                    field4Fill: false, // 0：校验 1：不校验
                    field4Show: false, //  0：显示 1：不显示 
                    field5: '', // 字段5显示名称
                    field5Fill: false, // 0：校验 1：不校验
                    field5Show: false, // 0：显示 1：不显示 
                    imgNum: '', // 可上传图片数量	
                    imgNumCheck: false, // 0：校验 1：不校验
                    imgNumShow: false, //  0：显示 1：不显示
                    videoNum: '', // 可上传视频数量	
                    videoNumCheck: false, //   0：校验 1：不校验
                    videoNumShow: false, //  0：显示 1：不显示
                    maxVoteNum: '' // 最多可投的票数
                },
                rules: {
                    matchSubject: [{
                        required: true,
                        message: '请输入比赛名称',
                        trigger: 'blur'
                    }],
                    activityDesc: [{
                        required: true,
                        message: '请输入比赛简介',
                        trigger: 'blur'
                    }],
                    headImgUrl: [{
                        required: true,
                        message: '请上传头像',
                        trigger: 'blur'
                    }]
                }
            }
        },
        mixins: [upimg],
        components: {},
        methods: {
            submitForm() {
                this.form.matchStartTime = this.kjsdd[0].times()
                this.form.matchEndTime = this.kjsdd[1].times()
                console.log(this.form);
                this.$refs.ruleForm.validate(async (valid) => {
                    if (valid) {
                        let hhhde = await this.$api.vote.addMatch(this.form)
                        this.$router.back(-1)
                    } else {
                        return false;
                    }
                });
            },
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



<style>
    .avatar-uploader .el-upload {
        width: 80px;
        height: 80px;
        line-height: 80px;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

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
