<!--配置信息-->
<template>
    <div class="app-container">

        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column label="配置项（key）" width="120" align="center">
                <template slot-scope="scope">
                    xcxname
                </template>
            </el-table-column>
            <el-table-column label="value" align="center">
                <template slot-scope="scope">
                    独行工匠
                </template>
            </el-table-column>

            <el-table-column label="说明" align="center">
                <template slot-scope="scope">
                    小程序名称
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

