<!--奖状列表-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="发奖原因"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input placeholder="奖项关键字"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">搜索</el-button>
                <router-link to="/classList/scjz">
                    <el-button type="primary">上传奖状</el-button>
                </router-link>
            </el-col>
        </el-row>
        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column type="selection" width="55" align="center"> </el-table-column>
                <el-table-column label="奖状ID" width="120" align="center">
                <template slot-scope="scope">
                    100
                </template>
            </el-table-column>
    <el-table-column label="所属班级" width="120" align="center">
                <template slot-scope="scope">
                    所属班级
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="120" align="center">
                <template slot-scope="scope">
                    李大霄
                </template>
            </el-table-column>
            <el-table-column label="发奖原因" align="center">
                <template slot-scope="scope">
                    发奖原因
                </template>
            </el-table-column>
            <el-table-column label="奖项名" align="center">
                <template slot-scope="scope">
                    奖项名
                </template>
            </el-table-column>
            <el-table-column label="发奖单位" align="center">
                <template slot-scope="scope">
                    发奖单位
                </template>
            </el-table-column>
            <el-table-column label="发奖日期" align="center">
                <template slot-scope="scope">
                    1小时前
                </template>
            </el-table-column>
 <el-table-column label="创建人" align="center">
                <template slot-scope="scope">
                    李大宵
                </template>
            </el-table-column>
 <el-table-column label="创建时间" align="center">
                <template slot-scope="scope">
                    <a class=" ">2020.1.1 12:10:01</a>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <span class="ls sz">查看 </span>
                    <span class="ml10 ls">删除</span>
                </template>
            </el-table-column>
           

        </el-table>
        <div class="mt40 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">\r
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import cjgl from './components/cjgl'
    export default {
        data() {
            return {
                activeName: '1',
                tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        components: {
            cjgl
        },
        methods: {},
        mounted() {}
    }

</script>
<style lang='scss' scoped>

</style>
