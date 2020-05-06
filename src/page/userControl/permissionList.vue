<!--权限列表-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或权限名"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">搜索</el-button>
            </el-col>
        </el-row>


        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column label="权限ID" width="120" align="center">
                <template slot-scope="scope">
                    100
                </template>
            </el-table-column>
            <el-table-column label="权限名" align="center">
                <template slot-scope="scope">
                    独行工匠
                </template>
            </el-table-column>

            <el-table-column label="权限项" align="center">
                <template slot-scope="scope">
                    查看权限
                </template>
            </el-table-column>
           
            <el-table-column label="操作" align="center">

                <template slot-scope="scope">
                    <span class="ls sz">设置成员</span> 
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
                dialogVisible:false,
                tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        components: {},
        methods: {},
        mounted() {}
    }

</script>
<style lang='scss' scoped>
    .sdfdfsttt{
        max-width: 100%
    }
</style>

