<template>
    <div class="app-container">
        <el-table :data="tableData" class="mt20 fz12" border>
            <el-table-column prop="dsfdsga" label="评论ID" align="center"> </el-table-column>
            <el-table-column prop="dsfdsgb" label="评论内容" align="center"> </el-table-column>
            <el-table-column prop="dsfdsgc" label="所属活动" align="center"> </el-table-column>
            <el-table-column prop="dsfdsgd" label="发布人" align="center"> </el-table-column>
            <el-table-column prop="dsfdsge" label="发布时间" align="center"> </el-table-column>
            <el-table-column prop="dsfdsgf" label="操作" align="center">
                <template slot-scope="scope" align="center">
                    <span class="ls sz" @click="shnhase(scope.$index)">删除</span>
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
    export default {
        data() {
            return {
                tableData: [{
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }, {
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }, {
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }, {
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }, {
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }, {
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }, {
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }, {
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }, {
                    dsfdsga: '100',
                    dsfdsgb: '好活动好活动好活动好活动',
                    dsfdsgc: '观察实际',
                    dsfdsgd: 'B同学',
                    dsfdsge: '2020-4-28 15:30',
                    dsfdsgf: '2020-4-28 15:30'
                }]
            }
        },
        components: {},
        methods: {
            shnhase(ids) {
                this.$confirm('确定删除吗？', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.tableData.splice(ids, 1);
                })
            }
        },
        mounted() {}
    }

</script>
<style scoped>

</style>
