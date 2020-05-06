<!--成绩管理-->
<template>
    <div>
        <el-table :data="tableData" class="mt20 fz12 cen" border>
              <el-table-column type="selection" width="55" align="center"> </el-table-column>
            <el-table-column label="发布人" width="120" align="center">
                <template slot-scope="scope">
                    李大霄
                </template>
            </el-table-column>
            <el-table-column label="标题" align="center">
                <template slot-scope="scope">
                    标题
                </template>
            </el-table-column>
            <el-table-column label="班级" align="center">
                <template slot-scope="scope">
                    一班
                </template>
            </el-table-column>
            <el-table-column label="可见性" align="center">
                <template slot-scope="scope">
                    家长自己可见
                </template>
            </el-table-column>
            <el-table-column label="详情" align="center">
                <template slot-scope="scope">
                    <span class="ls">详情</span>
                </template>
            </el-table-column>
            <el-table-column label="发布时间" align="center">
                <template slot-scope="scope">
                    1小时前
                </template>
            </el-table-column>
            <el-table-column label="管理" align="center">
                <template slot-scope="scope">
                    <span class="ls">删除</span>
                    <span class="ml10">已发布</span>
                </template>
            </el-table-column>
            <el-table-column label="成绩附件" align="center">
                <template slot-scope="scope">
                    <a class="ls sz">附件</a>
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
    export default {
        data() {
            return {
                tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        components: {},
        methods: {},
        mounted() {}
    }

</script>
<style lang='scss' scoped>

</style>
