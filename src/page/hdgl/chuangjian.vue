<!--创建活动-->
<template>
    <div class="app-container dsfdtery">
        <p class="fz18">
            创建活动
        </p>
        <div class="btm mt10 pt30">
            <div class="mmmndxertr">
                <el-form label-width="80px" :model="form" :rules="rules" ref="ruleForm"  v-loading="loading">
                    <el-form-item label="活动主题" prop="activitySubject">
                        <el-input v-model="form.activitySubject"></el-input>
                    </el-form-item>
                    <el-form-item label="活动介绍" prop="activityDesc">
                        <el-input type="textarea" v-model="form.activityDesc"></el-input>
                    </el-form-item>
                    <el-form-item label="视频链接" prop="videoUrl">
                        <el-input v-model="form.videoUrl"></el-input>
                    </el-form-item>
                    <el-form-item label="宣传图" prop="activityImgList">

                        <el-upload :file-list="filelist" action list-type="picture-card" :http-request="upload" :before-remove="deleece">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="选择标签" prop="activityLabelList">
                        <el-tag :key="tag" v-for="tag in form.activityLabelList" closable :disable-transitions="false" @close="handleClose(tag)">
                            {{tag}}
                        </el-tag>
                        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                    </el-form-item>
                    <el-form-item label="截止时间" prop="activityEndTime">
                        <el-date-picker v-model="form.activityEndTime" type="datetime" placeholder="选择日期时间" class="w100"> </el-date-picker>

                        <div class="mt40">
<!--                            <el-button type="primary">保存</el-button>-->
                            <el-button type="primary" @click="submitForm" :loading="loading">立即 {{isbianji?'保存':'发布'}}</el-button>
                        </div>
                    </el-form-item>
                </el-form>

            </div>
        </div>
    </div>
</template>
<script>
    import {
        upimg
    } from '@/assets/js/base'
    export default {
        data() {
            return {
                loading:false,
                kjsdd: '',
                dynamicTags: [],
                inputVisible: false,
                inputValue: '',
                filelist: [],
                isbianji:false, // 是否为编辑状态
                form: {
                    activitySubject: '', // 活动主题
                    activityDesc: '', // 活动介绍
                    videoUrl: '', // 视频链接
                    activityImgList: [], // 宣传图
                    activityLabelList: [], // 选择标签
                    activityEndTime: '' // 截止时间
                },
                rules: {
                    activitySubject: [{
                        required: true,
                        message: '请输入活动主题',
                        trigger: 'blur'
                    }],
                    activityDesc: [{
                        required: true,
                        message: '请输入活动介绍',
                        trigger: 'blur'
                    }],
                    videoUrl: [{
                        required: true,
                        message: '请输入视频链接',
                        trigger: 'blur'
                    }],
                    activityImgList: [{
                        type: 'array',
                        required: true,
                        message: '请上传宣传图'
                    }],
                    activityLabelList: [{
                        type: 'array',
                        required: true,
                        message: '请选择标签'
                    }],
                    activityEndTime: [{
                        required: true,
                        message: '请输入截止时间',
                        trigger: 'blur'
                    }],
                }
            }
        },
        components: {},
        mixins: [upimg],
        methods: {
            handleClose(tag) {
                this.form.activityLabelList.splice(this.form.activityLabelList.indexOf(tag), 1);
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
                    this.form.activityLabelList.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            lijmxdertr() {
                console.log(this.imgarray);
            },
            submitForm() {
                this.$refs.ruleForm.validate(async (valid) => {
                    if (valid) {
                        let jhhe = []
                        this.form.activityLabelList.map(a => {
                            let jhhse = {}
                            jhhse.labelName = a
                            jhhe.push(jhhse)
                        })
                        this.form.activityLabelList = jhhe
                        try {
                            this.form.activityEndTime = this.form.activityEndTime.times()
                        } catch (e) {

                        }
                        this.loading = true
                        let hhhde = await this.$api.hdgl.getaddActivity(this.form)
                           this.loading = false
                        this.$router.back(-1)

                    } else {
                        return false;
                    }
                });
            },
        },
        mounted() {
            const czsd = this.$route.query // 获取浏览器传过来的值
            // 有id 为编辑
            if (czsd.id) {
                this.isbianji = true
                this.form.id = czsd.id
                this.form.activitySubject = czsd.activitySubject
                this.form.activityDesc = czsd.activityDesc
                this.form.videoUrl = czsd.videoUrl
                this.form.activityImgList = JSON.parse(czsd.activityImgList)
                this.form.activityImgList.map(a => {
                    let sdeer = {}
                    sdeer.url = a.imgUrl
                    this.filelist.push(sdeer)
                })
                this.form.activityLabelList = []
                JSON.parse(czsd.activityLabelList).map(a => {
                    this.form.activityLabelList.push(a.labelName)
                })
                this.form.activityEndTime = czsd.activityEndTime
            }
        }
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
  
</style>
