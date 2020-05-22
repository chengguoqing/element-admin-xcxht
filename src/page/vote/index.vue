<!--投票后台-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或主题关键字" v-model="matchSubject"></el-input>
            </el-col>
            <el-col :span="3">
                <el-input placeholder="创建人姓名" v-model="matchCreator"></el-input>
            </el-col>
            <el-col :span="3">
                <el-checkbox v-model="homePageFlag" label="只搜推荐到首页的" key="0" class="fdgtyxxeer"></el-checkbox>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="getinit">搜索</el-button>
                <router-link to="/vote/cjvote">

                    <el-button type="primary">创建活动</el-button>
                </router-link>
            </el-col>
        </el-row>



        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column type="selection" width="55" align="center"> </el-table-column>
            <el-table-column prop="id" label="比赛ID" width="60" align="center"> </el-table-column>
            <el-table-column prop="matchSubject" label="比赛主题" align="center"> </el-table-column>
            <el-table-column prop="" label="比赛介绍" align="center">
                <template slot-scope="scope">
                    <div class="dianer fz12">
                        {{scope.row.matchDesc}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="视频" align="center">
                <template slot-scope="scope">
                    <span class="sz" @click="opem(scope.row.jhhhdfd)">{{scope.row.jhhhdfd}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="jhhhdfe" label="图片" width="130" align="center">
                <template slot-scope="scope" align="center">
                    <span class="ls sz" @click="dialogVisible=true">查看</span>
                    <!--
                    <div v-for="sd in scope.row.jhhhdfe" class="f_b fdfgdtyyux">
                        <el-image style="width: 40px; height: 40px" :src="sd" :preview-src-list="scope.row.jhhhdfe"></el-image>
                    </div>
-->
                </template>
            </el-table-column>
            <el-table-column prop="jhhhdfe" label="头图" width="130" align="center">
                <template slot-scope="scope" align="center">
                    <span class="ls sz" @click="gettouxiang(scope.row)">查看</span>
                </template>
            </el-table-column>
            <el-table-column prop="matcherNum" label="参赛人数" width="80" align="center"> </el-table-column>
            <el-table-column prop="matchCreator" label="创建人" width="80" align="center"> </el-table-column>
            <el-table-column prop="createdDate" label="创建时间" width="120" align="center">
                <template slot-scope="scope">
                    {{scope.row.createdDate | timee}}
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <span class="ls sz">查看</span>
                    <span class="ls ml10 sz">编辑</span>
                    <span class="ls ml10 sz" @click="xiazai(scope.row,1)">
                        <span v-if="scope.row.lowerFlag==0">上架</span>
                        <span v-else-if="scope.row.lowerFlag==1">下架</span>
                    </span>
                    <p>
                        <span class="ls sz" @click="xiazai(scope.row,2)">
                            <span v-if="scope.row.homePageFlag==0">取消推荐到首页</span>
                            <span v-else-if="scope.row.homePageFlag==1">推荐到首页</span>
                        </span>

                    </p>
                </template>
            </el-table-column>
            <el-table-column prop="lastOperater" label="最后操作人" align="center"> </el-table-column>
        </el-table>

        <div class="mt20 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper,slot" :total="total" @current-change="jjncdrt">
            </el-pagination>
        </div>

        <el-dialog title="可将某张设置为本活动宣传图" :visible.sync="dialogVisible" width="600px" :modal-append-to-body="false">
            <div>

                <el-image src="http://iph.href.lu/80x80" :preview-src-list="srcList" class="kjxeeert" v-for="(sd,idx) in 6" :class="idx == idsd?'act':''" @click="idsd=idx"></el-image>
                <p class="mt20">
                    <el-button type="primary">设为本活动宣传图</el-button>
                </p>
            </div>
        </el-dialog>

        <el-dialog title="" :visible.sync="dialogVisibleer" width="860px" :modal-append-to-body="false">
            <p class="cen">
                <img :src="touxiang" class="sdfdfsttt">
            </p>
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
                homePageFlag: false, // 是否推荐到首页 0：是 1：否
                matchCreator: '', // 活动发起人	
                matchSubject: '', // 比赛主题	
                dialogVisible: false,
                dialogVisibleer: false,
                touxiang: '', // 头像的url
                idsd: 0,
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'http://iph.href.lu/80x80',
                    'http://iph.href.lu/80x80'
                ],
                tableData: []
            }
        },
        mixins: [dxtables],
        components: {},
        methods: {
            opem(e) {
                open(e)
            },
            async getinit() {
                let sder = {}
                sder.homePageFlag = this.homePageFlag ? 0 : 1
                sder.matchCreator = this.matchCreator
                sder.matchSubject = this.matchSubject
                sder.pageNum = this.pageNum
                sder.pageSize = this.pageSize
                let res = await this.$api.vote.matchListAll(sder)
                this.total = res.total
                this.tableData = res.data
            },
            // ty 1上下架  2 推荐首页
            async xiazai(sd, ty) {
                let jhjhswe = {}
                jhjhswe.id = sd.id
                if (ty == 1) {
                    jhjhswe.lowerFlag = sd.lowerFlag == 0 ? 1 : 0
                } else if (ty == 2) {
                    jhjhswe.homePageFlag =  sd.homePageFlag == 0 ? 1 : 0
                }
                let hhhde = await this.$api.vote.modMatch(jhjhswe)
                this.$message.success(hhhde.msg)
                this.getinit()
            },
            gettouxiang(data) {
                this.dialogVisibleer = true
                this.touxiang = data.headImgUrl
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
