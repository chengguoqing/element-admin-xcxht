<!--参赛作品-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入参赛这姓名或比赛名称" v-model="matchOpusVal"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="getinit">搜索</el-button>
                <el-button type="primary" @click="handleDownload" :loading="downloadLoading">导出</el-button>
            </el-col>
        </el-row>



        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column prop="matchSubject" label="比赛名称" align="center"> </el-table-column>
            <el-table-column prop="field1" label="字段1" align="center"> </el-table-column>
            <el-table-column prop="field2" label="字段2" align="center"> </el-table-column>
            <el-table-column prop="field3" label="字段3" align="center"> </el-table-column>
            <el-table-column prop="field4" label="字段4" align="center"> </el-table-column>
            <el-table-column prop="" label="字段5" align="center">
                <template slot-scope="scope">
                    <div class="dianer fz12">
                        {{scope.row.field5}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="视频" align="center">
                <template slot-scope="scope">
                    <span class="sz" @click="opem(scope.row.jhhhdfd)">{{scope.row.jhhhdfd}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="opusCreator" label="创建人" width="80" align="center"> </el-table-column>
            <el-table-column label="创建时间" width="120" align="center">
                       <template slot-scope="scope">
                    {{scope.row.createdDate | timee}}
                </template>
            </el-table-column>
            <el-table-column prop="voteNum" label="票数" width="80" align="center"> </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
<!--
                    <span class="ls sz">查看</span>
                    <span class="ls ml10 sz">编辑</span>
-->
                    <span class="ls ml10 sz">下架</span>
                    <p>
                        <span class="ls sz">推荐到首页</span>
                    </p>
                </template>
            </el-table-column>
            <el-table-column prop="lastOperater" label="最后操作人" align="center"> </el-table-column>
        </el-table>

        <div class="mt20 tr">
        <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]"  layout="total, sizes, prev, pager, next, jumper,slot" :total="total" @current-change="jjncdrt">
            </el-pagination>
        </div>

    </div>
</template>
<script>
    import {
        dxtables
    } from '@/assets/js/base'
    export default {
        data() {
            return {
                downloadLoading: false,
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                matchOpusVal:'',
                tableData: []
            }
        },
        components: {},
        mixins: [dxtables],
        methods: {
            opem(e) {
                open(e)
            },
            handleDownload() {
                this.downloadLoading = true
                import('@/vendor/Export2Excel').then(excel => {
                    const tHeader = ['比赛名称', '字段1', '字段2', '字段3', '字段4', '字段5', '视频', '创建人', '票数', '最后操作人']
                    const filterVal = ['matchSubject', 'field1', 'field2', 'field3', 'field4', 'field5', '', 'opusCreator', 'voteNum', 'lastOperater']
                    const list = this.tableData
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: '参赛作品',
                        autoWidth: true,
                        bookType: 'xlsx'
                    })
                    this.downloadLoading = false
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => {
                    if (j === 'timestamp') {
                        return parseTime(v[j])
                    } else {
                        return v[j]
                    }
                }))
            },
            async getinit() {
                let sder = {}
                sder.matchOpusVal = this.matchOpusVal
                sder.pageNum = this.pageNum
                sder.pageSize = this.pageSize
                let res = await this.$api.vote.matchOpusList(sder)
                this.total = res.total
                this.tableData = res.data
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
