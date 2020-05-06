<!--通知列表-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或通知标题关键字"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input placeholder="班级名称"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">搜索</el-button>
            </el-col>
        </el-row>


        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column type="selection" width="55" align="center"> </el-table-column>
            <el-table-column label="通知ID" width="120" align="center">
                <template slot-scope="scope">
                    100
                </template>
            </el-table-column>
            <el-table-column label="通知标题" align="center">
                <template slot-scope="scope">
                    通知标题
                </template>
            </el-table-column>

            <el-table-column label="所属班级" align="center">
                <template slot-scope="scope">
                    所属班级
                </template>
            </el-table-column>

            <el-table-column label="所属学校" align="center">
                <template slot-scope="scope">
                    所属学校
                </template>
            </el-table-column>


            <el-table-column label="发布人" align="center">
                <template slot-scope="scope">
                    发布人
                </template>
            </el-table-column>

            <el-table-column label="发布时间" align="center">
                <template slot-scope="scope">
                    发布时间
                </template>
            </el-table-column>

            <el-table-column label="操作" align="center">

                <template slot-scope="scope">
                    <span class="ls sz">查看</span>
                    <span class="ls sz ml10">删除</span>


                </template>
            </el-table-column>

        </el-table>
        <div class="mt40 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">
            </el-pagination>
        </div>

        <el-dialog title="" :visible.sync="dialogVisible" width="860px" :modal-append-to-body="false">
            <p class="cen">
                <img src="http://iph.href.lu/750x400" class="sdfdfsttt">
            </p>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        components: {},
        methods: {},
        mounted() {}
    }

</script>
<style lang='scss' scoped>
    .sdfdfsttt {
        max-width: 100%
    }

</style>
