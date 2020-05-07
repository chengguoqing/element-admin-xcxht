<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或主题关键字" v-model="activitySubject"></el-input>
            </el-col>
            <el-col :span="3">
                <el-input placeholder="创建人姓名"></el-input>
            </el-col>
            <el-col :span="3">
                <el-checkbox v-model="homePageFlag" label="只搜推荐到首页的" key="0" class="fdgtyxxeer"></el-checkbox>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="getinit">搜索</el-button>
                <router-link to="/chuangjian">
                    <el-button type="primary">创建活动</el-button>
                </router-link>
            </el-col>
        </el-row>



        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column type="selection" width="55" align="center"> </el-table-column>
            <el-table-column prop="id" label="活动ID" width="60" align="center"> </el-table-column>
            <el-table-column prop="activitySubject" label="活动主题" align="center"> </el-table-column>
            <el-table-column prop="" label="活动介绍" align="center">
                <template slot-scope="scope">
                    <div class="dianer fz12">
                        {{scope.row.activityDesc}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="视频" align="center">
                <template slot-scope="scope">
                    <span class="sz" @click="opem(scope.row.videoUrl)">{{scope.row.videoUrl}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="jhhhdfe" label="图片" width="130" align="center">
                <template slot-scope="scope" align="center">
                    <span class="ls sz" @click="cktu(scope.row.activityImgList)">查看</span>
                    <!--
                    <div v-for="sd in scope.row.jhhhdfe" class="f_b fdfgdtyyux">
                        <el-image style="width: 40px; height: 40px" :src="sd" :preview-src-list="scope.row.jhhhdfe"></el-image>
                    </div>
-->
                </template>
            </el-table-column>
            <el-table-column label="标签" align="center">
                <template slot-scope="scope">
                    <span v-for="sd in scope.row.activityLabelList">{{sd.labelName}}&nbsp;</span>
                </template>
            </el-table-column>
            <el-table-column prop="commentNum" label="评论数" width="80" align="center"> </el-table-column>
            <el-table-column prop="activityCreator" label="创建人" width="80" align="center"> </el-table-column>
            <el-table-column label="创建时间" width="120" align="center">
                <template slot-scope="scope">
                    {{scope.row.activityCreationTime | timee}}
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <span class="ls sz">查看</span>
                    <span class="ls ml10 sz" @click="cnjhhgsd(scope.row)">编辑</span>
                    <span class="ls ml10 sz"@click="xiazai(scope.row)">
                        
                        <span v-if="scope.row.lowerFlag==0">上架</span>
                            <span v-else-if="scope.row.lowerFlag==1">下架</span>
                    </span>


                    <p>
                        <span class="ls sz" @click="tuijian(scope.row)">
                            <span v-if="scope.row.homePageFlag==0">取消推荐到首页</span>
                            <span v-else-if="scope.row.homePageFlag==1">推荐到首页</span>
                        </span>
                    </p>
                </template>
            </el-table-column>
            <el-table-column label="最后操作人" align="center">
                <template slot-scope="scope">
                    {{scope.row.lastOperateTime | timee}}
                </template>
            </el-table-column>
        </el-table>

        <div class="mt20 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">
            </el-pagination>
        </div>
        <el-dialog title="可将某张设置为本活动宣传图" :visible.sync="dialogVisible" width="600px" :modal-append-to-body="false">
            <div>

                <el-image :src="sd.imgUrl" :preview-src-list="srcList" class="kjxeeert" v-for="(sd,idx) in fengmian" :class="idx == idsd?'act':''" @click="idsd=idx"></el-image>
                <p class="mt20">
                    <el-button type="primary" @click="jjssd">设为本活动宣传图</el-button>
                </p>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    import {
        dxtables
    } from '@/assets/js/base'
    export default {
        data() {
            return {
                kkjnxs: [''],
                idsd: 0,
                dialogVisible: false,
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                fengmian: [],
                srcList: [],
                homePageFlag: false, // 是否推荐到首页 0：是 1：否
                activityCreator: 'tx',
                activitySubject: '' // 活动主题

            }
        },
        mixins: [dxtables],
        components: {},
        methods: {
            opem(e) {
                open(e)
            },
            jjssd(ddf) {
                this.dialogVisible = false
                this.$message.success('设置成功！')
            },
            cktu(tupiuan) {
                this.fengmian = tupiuan
                this.srcList = []
                tupiuan.map(a => {
                    this.srcList.push(a.imgUrl)
                })

                this.dialogVisible = true
            },
            async getinit() {
                let sder = {}
                sder.homePageFlag = this.homePageFlag ? 0 : 1
                sder.activityCreator = 'tx'
                sder.activitySubject = this.activitySubject
                this.tableData = await this.$api.hdgl.getactivityListAll(sder)
            },
            cnjhhgsd(datd) {
                datd.activityImgList = JSON.stringify(datd.activityImgList)
                datd.activityLabelList = JSON.stringify(datd.activityLabelList)
                this.hf('chuangjian', datd)
            },
            // 推荐到首页按钮触发
            async tuijian(sd) {
                let jhjhswe = {}
                jhjhswe.id = sd.id
                jhjhswe.homePageFlag = sd.homePageFlag == 0 ? 1 : 0
                let hhhde = await this.$api.hdgl.getaddActivity(jhjhswe)
                this.$message.success(hhhde.msg)
                this.getinit()
            },// 下架按钮触发
            async xiazai(sd) {
                let jhjhswe = {}
                jhjhswe.id = sd.id
                jhjhswe.lowerFlag = sd.lowerFlag == 0 ? 1 : 0
                let hhhde = await this.$api.hdgl.getaddActivity(jhjhswe)
                this.$message.success(hhhde.msg)
                this.getinit()
            }
        },
        mounted() {
            this.getinit()
        }
    }

</script>
<style scoped>
    .fdgtyxxeer {
        position: relative;
        top: 8px;
    }

    .fdfgdtyyux {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-left: 5px;
        margin-right: 5px;
        cursor: pointer
    }

    .fdfgdtyyux img {
        width: 100%;
        height: 100%
    }

</style>
