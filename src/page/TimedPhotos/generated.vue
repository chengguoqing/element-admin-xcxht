<!--已生成的视频列表-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-date-picker v-model="fdsdtty" type="datetime" placeholder="开始时间" class="w100"> </el-date-picker>
            </el-col>
            <el-col :span="2">
                <el-button type="primary">搜索</el-button>
            </el-col>
        </el-row>

        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column label="日期" width="120" align="center">
                <template slot-scope="scope">
                    100
                </template>
            </el-table-column>
            <el-table-column label="视频链接" align="center">
                <template slot-scope="scope">
                    https://v.douyin.com/38XxXH/
                </template>
            </el-table-column>
            <el-table-column label="生成时间" align="center">
                <template slot-scope="scope">
                    2020.1.1 12:01:01
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <span class="ls sz" @click="handleCopy('https://v.douyin.com/38XxXH/',$event)">复制链接</span>
                </template>
            </el-table-column>

        </el-table>

        <div class="mt40 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import clip from '@/utils/clipboard' // use clipboard directly
    export default {
        data() {
            return {
                tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        components: {},
        methods: {
            handleCopy(text, event) {
                clip(text, event)
            },
        },
        mounted() {}
    }

</script>
<style lang='scss' scoped>

</style>
