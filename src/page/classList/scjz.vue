<!--上传奖状-->
<template>
    <div class="app-container">
        <div class="sdfsdtrtxzew">
            <el-steps :space="600" :active="sdfsdg" finish-status="success">
                <el-step title="准备excel成绩单"></el-step>
                <el-step title="上传"></el-step>
                <el-step title="检测"></el-step>
                <el-step title="发布成功"></el-step>
            </el-steps>

            <div class="mt40">
                <div v-if="sdfsdg==0">
                    <p>
                        准备要导入的文件
                    </p>
                    <img src="@/assets//img/u595.png" class="mt10">
                    <div class="fz12 fgdyyx mt20 sdfwetyty">
                        导入如上内容后，李雷的奖状会显示：<br>

                        <div class="mt10">
                            <span class="ls">李雷</span>同学：<br>
                            你在 <span class="ls">2009学年第一季度表现出色 ，被评为“三好学生”</span>。<br>
                            特发此状，以资鼓励。

                            <p class="tr ls">
                                天大附中<br>
                                2019.12.12
                            </p>
                        </div>
                    </div>
                    <p class="ls fz12 mt10">
                        <a href="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/aff19158-6342-4e63-98b2-8ce14ff04870.xlsx">点击下载导入模板</a>
                    </p>
                    <div class="mt40">
                        <el-button type="primary" @click="sdfsdg=1">下一步</el-button>
                    </div>
                </div>

                <div v-if="sdfsdg==1">
                    <el-alert title="上传成绩" type="success" effect="dark" :closable="false">
                    </el-alert>
                    <el-form label-width="140px" class="mt30">
                        <el-form-item label="发奖原因">
                            <el-input placeholder="请输入发奖原因"></el-input>
                        </el-form-item>
                        <el-form-item label="考试时间">
                            <el-date-picker type="datetime" v-model="sdsfdg" placeholder="选择日期时间" class="w100"> </el-date-picker>
                        </el-form-item>

                        <el-form-item label="说明和备注">
                            <el-input type="textarea" placeholder="请输入说明和备注" class="w100"> </el-input>
                        </el-form-item>
                        <el-form-item label="选择班级">
                            <el-radio v-model="dsft" label="1">一班</el-radio>
                            <el-radio v-model="dsft" label="2">二班</el-radio>
                        </el-form-item>
                        <el-form-item label="上传成绩excel">
                            <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" texts="上传成绩" />

                            <div class="mt40">
                                <el-button type="primary" @click="iuuserrt">上传成绩单</el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>

                <div v-if="sdfsdg==2">
                    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;" @cell-click="dfdtyya">
                        <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" @cell-click="dfdtyyb" />
                    </el-table>
                    <div class="mt40">
                        <el-button type="primary" @click="sdfsdg=4">确认无误发布</el-button>
                    </div>
                </div>

                <div v-if="sdfsdg==4">
                    <p class="fz18 ">
                        发布成功
                    </p>
                    <div class="btm pt10 pd fz14 mt10 z6 ">
奖状导入成功！<br>
手机打开｛取配置项“小程序名”｝可打开班级动态查看奖状。<br>
每个同学都可以看到本版所有奖状。
                    </div>
                    <div class="mt40">
                        <router-link to="/classList/TestimonialsList">
                            <el-button type="primary">回到奖项列表</el-button>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>

        <el-dialog title="" :visible.sync="dialogVisible" width="400px" :modal-append-to-body="false">
            <div class="">
                <span class="ls">{{kjjhsse.姓名}}</span>同学：<br>
                你在 <span class="ls">{{kjjhsse.发奖原因}}”</span>。{{kjjhsse.奖项名}}<br>
                特发此状，以资鼓励。

                <p class="tr ls">
                    {{kjjhsse.发奖单位}}<br>
                    {{kjjhsse.发奖日期}}
                </p>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    import UploadExcelComponent from '@/components/UploadExcel/index.vue'
    export default {
        data() {
            return {
                sdfsdg: 0,
                sdsfdg: '',
                dsft: '',
                yzhManner: '',
                tableData: '',
                dialogVisible: false,
                kjjhsse:''
            }
        },
        components: {
            UploadExcelComponent
        },
        methods: {
            iuuserrt() {
                if (!this.tableData) {
                    this.$message.error('请上传成绩excel')
                    return
                }
                this.sdfsdg = 2
            },
            beforeUpload(file) {
                const isLt1M = file.size / 1024 / 1024 < 1
                if (isLt1M) {
                    return true
                }
                this.$message({
                    message: 'Please do not upload files larger than 1m in size.',
                    type: 'warning'
                })
                return false
            },
            handleSuccess({
                results,
                header
            }) {
                this.tableData = results
                this.tableHeader = header
            },
            dfdtyya(e) {
                this.dialogVisible=true
                this.kjjhsse = e
            }
        },
        mounted() {}
    }

</script>
<style lang='scss' scoped>
    .sdfsdtrtxzew {
        width: 1200px;
        margin: auto;
    }

    .dfrgtt {
        line-height: 1.8
    }

    .fgdyyx {
        line-height: 1.5
    }

    .sdfwetyty {
        width: 300px
    }

</style>
