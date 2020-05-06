<!--上传成绩-->
<template>
    <div class="app-container">
        <div class="sdfsdtrtxzew">
            <el-steps :space="600" :active="sdfsdg" finish-status="success">
                <el-step title="准备excel成绩单"></el-step>
                <el-step title="成绩上传"></el-step>
                <el-step title="成绩检测"></el-step>
                <el-step title="成绩预览"></el-step>
                <el-step title="发布成功"></el-step>
            </el-steps>

            <div class="mt40">
                <div v-if="sdfsdg==0">
                    <p>
                        准备要导入的文件
                    </p>
                    <img src="@/assets//img/u544.png" class="mt10">
                    <p class="fz12 fgdyyx mt20">
                        格式说明：<br>
                        1、姓名，用来和小程序中的班级成员匹配，不能为空。<br>
                        2、黄色背景的列，标题名称和先后次序不可更改。<br>
                        3、课程列可根据需要增加或删除。例如上图如果只导入语文成绩，则删除示例中的英语和地理列。<br>
                        4、总分、平均分列可以使用 excel 函数。<br>
                        5、成绩放在excel 的第一个 sheet 中，一般为 ”Sheet1“
                    </p>
                    <p class="ls fz12 mt10">
                        <a href="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/ddc8ce4f-c688-445e-aea5-25b335e10f02.xlsx">点击下载导入模板</a>
                    </p>
                    <div class="mt40">
                        <el-button type="primary" @click="sdfsdg=1">下一步</el-button>
                    </div>
                </div>

                <div v-if="sdfsdg==1">
                    <el-alert title="上传成绩" type="success" effect="dark" :closable="false">
                    </el-alert>
                    <el-form label-width="140px" class="mt30">
                        <el-form-item label="成绩名称">
                            <el-input placeholder="如2018年上学第一次月考成绩"></el-input>
                        </el-form-item>
                        <el-form-item label="考试时间">
                            <el-date-picker type="datetime" v-model="sdsfdg" placeholder="选择日期时间" class="w100"> </el-date-picker>
                        </el-form-item>

                        <el-form-item label="说明和备注">
                            <el-input type="textarea" placeholder="如本次数学满分60分，全部平均87" class="w100"> </el-input>
                        </el-form-item>
                        <el-form-item label="选择班级">
                            <el-radio v-model="dsft" label="1">一班</el-radio>
                            <el-radio v-model="dsft" label="2">二班</el-radio>
                        </el-form-item>
                        <el-form-item label="上传成绩excel">
                            <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" texts="上传成绩" />
                        </el-form-item>
                        <el-form-item label="可见性">
                            <el-select v-model="yzhManner" filterable class="w100">
                                <el-option label="学生家长只能看到自己小孩的成绩" value="1"></el-option>
                                <el-option label="学生家长只能看到自己小孩的成绩2" value="2"></el-option>
                            </el-select>
                            <div class="mt40">
                                <el-button type="primary" @click="iuuserrt">上传成绩单</el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>

                <div v-if="sdfsdg==2">
                    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
                        <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
                    </el-table>
                    <div class="mt40">
                        <el-button type="primary" @click="sdfsdg=5">确认无误发布</el-button>
                    </div>
                </div>

                <div v-if="sdfsdg==5">
                    <p class="fz18 ">
                        发布成功
                    </p>
                    <div class="btm pt10 pd fz14 mt10 z6 ">
                        

成绩导入成功！<br>
手机打开｛取配置项“小程序名”｝可打开班级动态查看成绩。<br>
每个同学默认只能看到自己的成绩<br>
老师如果将分享了全班成绩，分享给谁谁就能看全部
                    </div>
                    <div class="mt40">
                        <router-link to="/classList/grade">
                            <el-button type="primary">回到成绩列表</el-button>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>

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
                tableData: ''
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

</style>
