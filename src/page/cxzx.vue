<!--创建咨询-->
<template>
    <div class="app-container dsfdtery">
        <p class="fz18">
            创建咨询
        </p>
        <div class="btm mt10 pt30">
            <div class="mmmndxertr">
                <el-form label-width="80px" ref="ruleForm" :model="form" :rules="rules">
                    <el-form-item label="资讯主题" prop="informationSubject">
                        <el-input v-model="form.informationSubject"></el-input>
                    </el-form-item>
                    <el-form-item label="资讯描述" prop="informationDesc">
                        <tinymce v-model="form.informationDesc" :height="300" />
                    </el-form-item>
                    <el-form-item>
                        <div class="mt40">
                            <el-button type="primary" @click="submitForm" :loading="loading">
                                立即{{!isddf?'发布':'保存'}}
                            </el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>

</template>
<script>
    import Tinymce from '@/components/Tinymce'
    export default {
        data() {
            return {
                loading: false,
                isddf: false, // true 为编辑状态
                form: {
                    informationSubject: '', // 资讯主题	
                    informationDesc: '' // 资讯描述	
                },
                rules: {
                    informationSubject: [{
                        required: true,
                        message: '请输入资讯主题',
                        trigger: 'blur'
                    }],
                    informationDesc: [{
                        required: true,
                        message: '请输入资讯描述',
                        trigger: 'blur'
                    }]
                }
            }
        },
        components: {
            Tinymce
        },
        methods: {
            // 立即发布 按钮点击触发
            submitForm() {
                this.$refs.ruleForm.validate(async (valid) => {
                    if (valid) {
                        if (this.isddf) {
                            this.xiazai()
                        } else {
                            this.loading = true
                            let hhhde = await this.$api.consultiveManagement.addInformation(this.form)
                            this.loading = false
                            this.$router.back(-1)
                        }

                    } else {
                        return false;
                    }
                })
            },
            async xiazai() {
                let jhjhswe = this.form
                jhjhswe.id = this.$route.query.id
                let hhhde = await this.$api.consultiveManagement.xgmodInformation(jhjhswe)
                this.$message.success(hhhde.msg)
                this.$router.back(-1)
            },
            async getxq() {
                let res = await this.$api.consultiveManagement.informationDetail(this.$route.query.id)
                res = res.data
                this.form.informationSubject = res.informationSubject
                this.form.informationDesc = res.informationDesc
            }
        },
        mounted() {
            // 编辑状态
            if (this.$route.query.id) {
                this.isddf = true
                this.getxq()
            }
        }
    }

</script>
<style scoped>
    .mmmndxertr {
        width: 1280px
    }

</style>
